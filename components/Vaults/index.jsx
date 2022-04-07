import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Skeleton, Card, Row, Col, Alert, Typography, Tag,
} from 'antd/lib';
import { COLOR } from 'util/theme';
import { getVaultInfo } from './utils';
import { VaultContainer } from './styles';

const { Paragraph } = Typography;
const { Meta } = Card;

/**
 * Vault component
 */
const Vault = ({ account }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(async () => {
    if (account) {
      setIsLoading(true);
      setList([]);

      try {
        const data = await getVaultInfo();
        setList(data);
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
    return <Alert message="No vault found" type="info" />;
  }

  return (
    <VaultContainer>
      <Row>
        {list.map((vault) => {
          const {
            id, name, description, reservePrice, isClosed, token,
          } = vault;

          return (
            <Col lg={6} xs={12} key={`vault-${id}`}>
              <Card hoverable onClick={() => router.push(`/vaults/${token}`)}>
                <Meta title={name} />

                {description && (
                  <Paragraph
                    ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
                  >
                    {description}
                  </Paragraph>
                )}

                <div>
                  {isClosed ? (
                    <Tag color={COLOR.RED}>CLOSED</Tag>
                  ) : (
                    <Tag color={COLOR.PRIMARY}>OPEN</Tag>
                  )}
                </div>
                <br />

                <Paragraph>{`Reserve Price: ${reservePrice}`}</Paragraph>
              </Card>
            </Col>
          );
        })}
      </Row>
    </VaultContainer>
  );
};

Vault.propTypes = {
  account: PropTypes.string,
};

Vault.defaultProps = {
  account: null,
};

const mapStateToProps = (state) => {
  const { account } = state.setup;
  return { account };
};

export default connect(mapStateToProps, {})(Vault);
