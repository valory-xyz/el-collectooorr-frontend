/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Skeleton, Row, Col, Alert, Progress,
} from 'antd/lib';
import { get } from 'lodash';
import { COLOR } from 'util/theme';
import { getBaskets } from './utils';
import Vault from './helpers/Vault';
import Service from './helpers/Service';
import AddFunds from './helpers/AddFunds';
import Gallery from './helpers/Gallery';
import { BasketContainer, SubHeader, FundingProgress } from './styles';

/**
 * helper function formalize the list type
 * If (kinesis_contract) we will get animation which needs iFrame
 * If (ipfs_contract) we will get image
 */
const getCollectionList = (array) => {
  if ((get(array[0], 'image') || '').includes('ipfs')) {
    return array.map(({ name, description, image }) => {
      const imageUrl = image
        ? `https://ipfs.foundation.app/ipfs/${image.replace('ipfs://', '')}`
        : null;
      return {
        type: 'image',
        name,
        url: imageUrl,
        style: { height: '138px' },
        description,
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
  const [list, setList] = useState([]);

  useEffect(async () => {
    if (account) {
      setIsLoading(true);
      setList([]);

      try {
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

  if (isLoading) {
    return <Skeleton active />;
  }

  if (list.length === 0) {
    return <Alert message="No basket found" type="info" />;
  }

  return (
    <BasketContainer>
      <Row>
        <Col md={10}>
          <SubHeader>
            <div className="sub-header">
              <img
                src="/images/Vault/fund.png"
                alt=""
                loading="lazy"
                height={48}
              />
              <h3>Fund</h3>
            </div>

            <div className="vault-status">OPEN</div>
          </SubHeader>

          <FundingProgress>
            <Progress
              percent={10}
              status="active"
              strokeColor={COLOR.PRIMARY}
              strokeWidth={30}
              showInfo={false}
            />
            <div className="funding-process-info">
              <div>0 ETH</div>
              <div>5 ETH</div>
              <div>
                <span>10 ETH</span>
                <span>(full)</span>
              </div>
            </div>
          </FundingProgress>

          <AddFunds />

          <Service />
        </Col>

        <Col md={13} offset={1} className="right-columm">
          <Vault />
          <Gallery list={list} />
        </Col>
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
