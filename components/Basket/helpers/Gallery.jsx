import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { COLOR } from 'util/theme';
import { Card } from 'antd/lib';
import { SubHeader } from '../styles';

export const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const VaultHeader = styled(SubHeader)`
  margin-top: 2rem;
`;

const getImage = (type, {
  name, index, url, style,
}) => {
  if (type === 'iframe') {
    return <iframe title={`basket-NFT-${index}`} src={url} />;
  }
  if (type === 'image') return <img alt={name} src={url} style={style} />;
  return null;
};

const Gallery = ({ list }) => (
  <div>
    <VaultHeader>
      <div className="sub-header">
        <img src="/images/Vault/gallery.png" alt="" loading="lazy" height={60} />
        <h3>Gallery</h3>
      </div>
    </VaultHeader>

    <GalleryList>
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
    </GalleryList>
  </div>
);

Gallery.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
};

Gallery.defaultProps = {
  list: [],
};

export default Gallery;
