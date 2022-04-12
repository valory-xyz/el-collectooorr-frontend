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
  Progress,
} from 'antd/lib';
import { get } from 'lodash';
import { COLOR } from 'util/theme';
import { getBaskets } from './utils';
import Pool from './helpers/Pool';
import History from './helpers/History';
import AddFunds from './helpers/AddFunds';
import { BasketContainer, Gallery, FundingProgress } from './styles';

const { Paragraph } = Typography;

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

  return (
    <BasketContainer>
      <Row>
        <Col md={8}>
          <div>Fund - open</div>

          <FundingProgress>
            <Progress
              percent={10}
              status="active"
              strokeColor={COLOR.PRIMARY}
              strokeWidth={20}
              showInfo={false}
            />
            <div className="funding-process-info">
              <div>0 ETH</div>
              <div>5 ETH</div>
              <div>
                <span>10 ETH</span>
                <span>Full</span>
              </div>
            </div>
          </FundingProgress>

          <AddFunds />
          <br />
          <br />
          <br />
          <History />
        </Col>

        <Col md={15} offset={1} className="right-columm">
          <Pool />
          <br />
          <br />

          <Paragraph>Gallery</Paragraph>

          <Gallery>
            {list.map(({
              name, type, url, style,
            }, index) => (
              <Card key={`basket-${index}`} bordered={false}>
                {getImage(type, {
                  index,
                  url,
                  name,
                  style,
                })}

                <Card.Meta title={name} />
                <div className="nft-info">
                  <div>Robert</div>
                  <div>Live View</div>
                  <div>
                    Bought: 0.1 ETH&nbsp;&bull;&nbsp;12/1&nbsp;&bull;&nbsp;
                    <span>
                      <a
                        href="http://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Txn
                      </a>
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </Gallery>
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
