/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Skeleton, Row, Col, Alert,
} from 'antd/lib';
import { get } from 'lodash';
import { VAULT_ADDRESS } from 'common-util/AbiAndAddresses';
import Fund from './helpers/Fund';
import Service from './helpers/Service';
import Vault from './helpers/Vault';
import Gallery from './helpers/Gallery';
import {
  getBaskets,
  getVaultStatus,
  getVaultReservePrice,
  getVaultSymbol,
  getVaultTotalSupply,
  getBalanceOf,
  getNftsInfo,
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
        style: { height: '138px' },
      };
    });
  }

  return array;
};

/**
 * Basket component
 */
const Basket = ({ account, balance }) => {
  const router = useRouter();
  const id = get(router, 'query.id') || null;

  const [isLoading, setIsLoading] = useState(false);
  const [isVaultClosed, setVaultStatus] = useState(null);
  const [vaultReservePrice, setVaultReservePrice] = useState(null);
  const [vaultSymbol, setVaultSymbol] = useState(null);
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
    if (account) {
      setList([]);

      try {
        const status = await getVaultStatus();
        setVaultStatus(status);

        const reservePrice = await getVaultReservePrice();
        setVaultReservePrice(reservePrice);

        const symbol = await getVaultSymbol();
        setVaultSymbol(symbol);

        const vtkBalance = await getBalanceOf(account);
        setUserVTKBalance(vtkBalance);

        const vaultBalance = await getBalanceOf(VAULT_ADDRESS);
        setVaultBalanceOf(vaultBalance);

        const totalSupply = await getVaultTotalSupply(account);
        setVaultTotalSupply(totalSupply);

        const data = await getBaskets(id);
        const transformedList = getCollectionList(data);
        setList(transformedList);

        const medataList = await getNftsInfo(data.length);
        setNftMetadata(medataList);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    /**
     * update API call when account is changed or
     * balance is updated
     */
  }, [account, balance]);

  if (!account) {
    return (
      <Alert
        message="Please connect your wallet!"
        type="warning"
        showIcon
        closable
      />
    );
  }

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <BasketContainer>
      <Row>
        <Col md={12}>
          <Fund
            isVaultClosed={isVaultClosed}
            vaultSymbol={vaultSymbol}
            vaultBalanceOf={vaultBalanceOf}
            vaultTotalSupply={vaultTotalSupply}
            userVTKBalance={userVTKBalance}
          />
          <Service isVaultClosed={isVaultClosed} />
        </Col>

        <Col md={12} className="right-columm">
          <Vault
            vaultReservePrice={vaultReservePrice}
            vaultSymbol={vaultSymbol}
            userVTKBalance={userVTKBalance}
          />
          <Gallery list={list} nftMetadata={nftMetadata} />
        </Col>
      </Row>
    </BasketContainer>
  );
};

Basket.propTypes = {
  account: PropTypes.string,
  balance: PropTypes.number,
};

Basket.defaultProps = {
  account: null,
  balance: null,
};

const mapStateToProps = (state) => {
  const { account, balance } = state.setup;
  return { account, balance };
};

export default connect(mapStateToProps, {})(Basket);
