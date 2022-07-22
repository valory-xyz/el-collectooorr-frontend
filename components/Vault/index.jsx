import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Skeleton, Row, Col } from 'antd/lib';
import { get } from 'lodash';
import RiskBanner from 'common-util/RiskBanner';
import { SAFE_CONTRACT_ADDRESS } from 'common-util/AbiAndAddresses';
import Fund from './helpers/Fund';
import Service from './helpers/Service';
import Vault from './helpers/Vault';
import Gallery from './helpers/Gallery';
import {
  getVaultStatus,
  getVaultReservePrice,
  getVaultSymbol,
  getVaultTotalSupply,
  getBalanceOf,
  getNftsInfo,
  getLatestVaultAndBasket,
  mockGetNfts,
} from './utils';
import { BasketContainer } from './styles';

/**
 * helper function formalize the list type
 * If (kinesis_contract) we will get animation which needs iFrame
 * If (ipfs_contract) we will get image
 */
const getCollectionList = (array) => {
  if ((get(array[0], 'image') || '').includes('ipfs')) {
    return array.map(({
      name, description, image, txn,
    }) => {
      const imageUrl = image
        ? `https://ipfs.foundation.app/ipfs/${image.replace('ipfs://', '')}`
        : null;
      return {
        type: 'image',
        url: imageUrl,
        name,
        txn: `https://etherscan.io/address/${txn}`,
        description,
        style: { height: '242px' },
      };
    });
  }

  return array;
};

/**
 * Vault component
 */
const VaultComponent = ({ account, balance }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVaultClosed, setVaultStatus] = useState(null);
  const [vaultReservePrice, setVaultReservePrice] = useState(null);
  const [vaultSymbol, setVaultSymbol] = useState('--');
  const [vaultBalanceOf, setVaultBalanceOf] = useState(null);
  const [vaultTotalSupply, setVaultTotalSupply] = useState(null);
  const [userVTKBalance, setUserVTKBalance] = useState(null);

  const [list, setList] = useState([]);
  const [nftMetadata, setNftMetadata] = useState([]);

  // loader only one first render
  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(async () => {
    setList([]);

    try {
      /**
       * order is important here as all the data independent
       * of the `account` should be fetched first.
       */
      if (!account) {
        return;
      }

      const { latestVaultAddress, latestBasketAddress } = await getLatestVaultAndBasket();

      const status = await getVaultStatus(latestVaultAddress);
      setVaultStatus(status);

      const reservePrice = await getVaultReservePrice(latestVaultAddress);
      setVaultReservePrice(reservePrice);

      const symbol = await getVaultSymbol(latestVaultAddress);
      setVaultSymbol(symbol);

      const totalSupply = await getVaultTotalSupply(latestVaultAddress);
      setVaultTotalSupply(totalSupply);

      const vaultBalance = await getBalanceOf(
        SAFE_CONTRACT_ADDRESS,
        latestVaultAddress,
      );
      setVaultBalanceOf(vaultBalance);

      const vtkBalance = await getBalanceOf(account, latestVaultAddress);
      setUserVTKBalance(vtkBalance);

      const data = await mockGetNfts(latestBasketAddress);
      const transformedList = getCollectionList(data);
      setList(transformedList);

      const metadataList = await getNftsInfo(data.length);
      setNftMetadata(metadataList);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
    /**
     * update API call when account is changed or
     * balance is updated
     */
  }, [account, balance]);

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <>
      <RiskBanner />

      <BasketContainer>
        <Row>
          <Col lg={8} md={12}>
            <Service isVaultClosed={isVaultClosed} />
            <Fund
              isVaultClosed={isVaultClosed}
              vaultSymbol={vaultSymbol}
              vaultBalanceOf={vaultBalanceOf}
              vaultTotalSupply={vaultTotalSupply}
              userVTKBalance={userVTKBalance}
            />
          </Col>

          <Col lg={16} md={12} className="right-columm">
            <Vault
              vaultReservePrice={vaultReservePrice}
              vaultSymbol={vaultSymbol}
              userVTKBalance={userVTKBalance}
              vaultTotalSupply={vaultTotalSupply}
            />
            <Gallery list={list} nftMetadata={nftMetadata} />
          </Col>
        </Row>
      </BasketContainer>
    </>
  );
};

VaultComponent.propTypes = {
  account: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VaultComponent.defaultProps = {
  account: null,
  balance: null,
};

const mapStateToProps = (state) => {
  const { account, balance } = state.setup;
  return {
    account,
    balance,
  };
};

export default connect(mapStateToProps, {})(VaultComponent);
