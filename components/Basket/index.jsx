/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Skeleton,
  Card,
  Row,
  Col,
  Alert,
  Typography,
  Timeline,
} from 'antd/lib';
import { get } from 'lodash';
import { COLOR } from 'util/theme';
import { getBaskets } from './utils';
import { BasketContainer } from './styles';

const { Paragraph, Title } = Typography;
// const { Meta } = Card;

/**
 * helper function formalize the list type
 * If (kinesis_contract) we will get animation which needs iFrame
 * If (ipfs_contract) we will get image
 */
const getCollectionList = (array) => {
  if ((get(array[0], 'platform') || '') === 'KINESIS') {
    return array.map(({ collection_name, animation_url, description }) => ({
      type: 'iframe',
      name: collection_name,
      url: animation_url,
      description,
    }));
  }

  if ((get(array[0], 'image') || '').includes('ipfs')) {
    return array.map(({ name, description, image }) => {
      const imageUrl = image
        ? `https://ipfs.foundation.app/${image.replace('ipfs://', '')}`
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

const getImage = (type, {
  name, index, url, style,
}) => {
  if (type === 'iframe') {
    return <iframe title={`basket-NFT-${index}`} src={url} />;
  }

  if (type === 'image') return <img alt={name} src={url} style={style} />;

  return null;
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

  const timeline = [
    {
      type: 'Funding',
      time: '12/01/2020 12:00 UTC - 30/01/2020 12:00 UTC',
      isActive: true,
    },
    {
      type: 'Collecting',
      time: '12/01/2020 12:00 UTC - 30/01/2020 12:00 UTC',
      isActive: false,
    },
    {
      type: 'Closed',
      time: '12/01/2020 12:00 UTC - 30/01/2020 12:00 UTC',
      isActive: false,
    },
  ];

  return (
    <BasketContainer>
      <Row>
        <Title level={3}>{`Vault #${id}`}</Title>
      </Row>

      <Row>
        <Col flex={1}>
          <br />
          <Timeline>
            {timeline.map(({ type, time, isActive }) => (
              <Timeline.Item
                key={type}
                color={isActive ? COLOR.PRIMARY : COLOR.GREY_1}
              >
                <div>{type}</div>
                <p>{time}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>

        <Col flex={1}>
          <Paragraph>Gallery</Paragraph>

          {list.map(({
            name, type, url, style,
          }, index) => (
            <Card key={`basket-${index}`}>
              {getImage(type, {
                index,
                url,
                name,
                style,
              })}
            </Card>
          ))}
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
