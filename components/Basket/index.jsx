import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Skeleton, Row, Col } from 'antd/lib';
import { get } from 'lodash';
import { IPFS_URL } from 'util/constants';
import { VAULT_ADDRESS } from 'common-util/AbiAndAddresses';
import RiskBanner from 'common-util/RiskBanner';
import { waitSometime } from 'common-util/functions';
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
import { NFT_LIST, NFT_METADATA } from './dummyValues';
import { BasketContainer } from './styles';

const IS_DEMO = true;

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
      const getImageUrl = () => {
        if (!image) return null;
        if (image.includes('ipfs://')) {
          return `${IPFS_URL}${image.replace('ipfs://', '')}`;
        }
        return image;
      };

      return {
        type: 'image',
        url: getImageUrl(),
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
 * Basket component
 */
const Basket = ({ account, balance }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVaultClosed, setVaultStatus] = useState(null);
  const [vaultReservePrice, setVaultReservePrice] = useState(null);
  const [vaultSymbol, setVaultSymbol] = useState(null);
  const [vaultBalanceOf, setVaultBalanceOf] = useState(null);
  const [vaultTotalSupply, setVaultTotalSupply] = useState(null);
  const [userVTKBalance, setUserVTKBalance] = useState(null);

  const [isListLoading, setListLoading] = useState(false);
  const [list, setList] = useState([]);
  const [nftMetadata, setNftMetadata] = useState([]);

  // loader only one first render
  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(async () => {
    setList([]);

    if (IS_DEMO) {
      setIsLoading(false);
      setVaultStatus(false);
      setVaultReservePrice('15');
      setVaultSymbol('VLT1');
      setUserVTKBalance(0);
      setVaultBalanceOf(10000);
      setVaultTotalSupply(10000);
    } else {
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

        const data = await getBaskets();
        const transformedList = getCollectionList(data);
        setList(transformedList);

        const metadataList = await getNftsInfo(data.length);
        setNftMetadata(metadataList);
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

  /**
   * callback on add-funds
   */
  const addFundCallback = async (input, ethValue) => {
    if (IS_DEMO) {
      const amount = input / ethValue;

      // await waitSometime(5000);
      setListLoading(true);
      setUserVTKBalance(userVTKBalance + amount);

      await waitSometime(5000);
      setVaultBalanceOf(vaultBalanceOf - amount);

      /**
       * dummy NFT
       * add only if we dont' have NFT: TODO
       */
      await waitSometime(5000);
      if (list.length === 0) {
        let count = 0;
        const intervalFn = setInterval(() => {
          setListLoading(false);
          setList((e) => [...e, NFT_LIST[count]]);
          setNftMetadata((e) => [...e, NFT_METADATA[count]]);
          count += 1;
          if (count === NFT_LIST.length) {
            clearInterval(intervalFn);
          }
        }, 3000);
      }
    }
  };

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <>
      <RiskBanner />

      <BasketContainer>
        <Row>
          <Col md={8}>
            <Service isVaultClosed={isVaultClosed} />
            <Fund
              isVaultClosed={isVaultClosed}
              vaultSymbol={vaultSymbol}
              vaultBalanceOf={vaultBalanceOf}
              vaultTotalSupply={vaultTotalSupply}
              userVTKBalance={userVTKBalance}
              isDemo={IS_DEMO}
              addFundCallback={addFundCallback}
            />
          </Col>

          <Col md={16} className="right-columm">
            <Vault
              vaultReservePrice={vaultReservePrice}
              vaultSymbol={vaultSymbol}
              userVTKBalance={userVTKBalance}
            />
            <Gallery
              isLoading={isListLoading}
              list={list}
              nftMetadata={nftMetadata}
            />
          </Col>
        </Row>
      </BasketContainer>
    </>
  );
};

Basket.propTypes = {
  account: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
