/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Skeleton, Card, Row, Col, Alert, Typography,
} from 'antd/lib';
import { get } from 'lodash';
import { getBaskets } from './utils';
import { BasketContainer } from './styles';

const { Paragraph } = Typography;

const { Meta } = Card;
const Basket = ({ account }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  const getCollectionList = (array) => {
    if ((get(list[0], 'platform') || '') === 'KINESIS') {
      return array.map(({ collection_name, animation_url, description }) => ({
        type: 'iframe',
        name: collection_name,
        url: animation_url,
        description,
      }));
    }

    if ((get(list[0], 'image') || '').includes('ipfs')) {
      return array.map(({ name, description, image }) => ({
        type: 'image',
        name,
        url: image,
        description,
      }));
    }

    return array;
  };

  useEffect(async () => {
    if (account) {
      setIsLoading(true);
      setList([]);

      try {
        const data = await getBaskets();
        setList(getCollectionList(data));
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

  console.log({ list });
  return (
    <BasketContainer>
      <Row>
        {list.map(({
          name, description, type, url,
        }, index) => (
          <Col lg={6} xs={12} key={`basket-${index}`} id="mohan">
            <Card hoverable>
              {type === 'iframe' && (
              <iframe title={`basket-NFT-${index}`} src={url} />
              )}

              {type === 'image' && <img alt={name} src={url} />}

              <Meta title={name} />

              <Paragraph
                ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
              >
                {description}
              </Paragraph>
            </Card>
          </Col>
        ))}
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
