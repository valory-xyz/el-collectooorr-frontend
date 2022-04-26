/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Skeleton, Row, Col, Alert,
} from 'antd/lib';
import { get } from 'lodash';
import {
  getBaskets,
  getVaultStatus,
  getVaultReservePrice,
  getVaultSymbol,
  getUserBalance,
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
const Basket = ({ account }) => {
  const router = useRouter();
  const id = get(router, 'query.id') || null;

  const [isLoading, setIsLoading] = useState(false);
  const [isVaultClosed, setVaultStatus] = useState(null);
  const [vaultReservePrice, setVaultReservePrice] = useState(null);
  const [vaultSymbol, setVaultSymbol] = useState(null);
  const [vaultUserBalance, setVaultUserBalance] = useState(null);

  const [list, setList] = useState([]);

  useEffect(async () => {
    if (account) {
      setIsLoading(true);
      setList([]);

      try {
        const status = await getVaultStatus();
        setVaultStatus(status);

        const reservePrice = await getVaultReservePrice();
        setVaultReservePrice(reservePrice);

        const symbol = await getVaultSymbol();
        setVaultSymbol(symbol);

        const balance = await getUserBalance(account);
        setVaultUserBalance(balance);

        const data = await getBaskets(id);
        const transformedList = getCollectionList(data);
        setList(transformedList);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  }, [account]);

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
        <Col md={12} />

        <Col md={12} className="right-columm" />
      </Row>
    </BasketContainer>
  );
};

Basket.propTypes = {
  account: PropTypes.string,
};

Basket.defaultProps = {
  account: null,
};

const mapStateToProps = (state) => {
  const { account } = state.setup;
  return { account };
};

export default connect(mapStateToProps, {})(Basket);
