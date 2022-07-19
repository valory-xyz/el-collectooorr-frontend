import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd/lib';
import LinkIcon from 'common-util/SVGs/link';
import { GalleryList, GalleryContainer, SubHeader } from '../styles';

const getImage = (type, {
  name, index, url, style,
}) => {
  if (type === 'iframe') {
    return <iframe title={`basket-NFT-${index}`} src={url} />;
  }

  if (type === 'image') {
    return (
      <div className="nft-img">
        <img alt={name} src={url} style={style} />
      </div>
    );
  }

  if (!type) {
    console.warn('handling undefined image types as images');

    return (
      <div className="nft-img">
        <img alt={name} src={url} style={style} />
      </div>
    );
  }

  return null;
};

const getNftInfo = (url, info) => {
  const {
    artist, bought, date, txn,
  } = info || {};

  return (
    <div className="nft-info">
      {artist && <div>{artist}</div>}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="live-view"
      >
        Live View
        <LinkIcon />
      </a>

      <div>
        {bought && <>{`Bought: ${bought}ETH`}</>}
        {date && (
          <>
            &nbsp;&bull;&nbsp;
            {date}
          </>
        )}
        {txn && (
          <>
            &nbsp;&bull;&nbsp;
            <span>
              <a
                href={`https://etherscan.io/tx/${txn}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Txn
              </a>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

const Gallery = ({ list, nftMetadata }) => {
  const { length } = list || [];
  const text = `${length} piece${length === 1 ? '' : 's'} collected`;

  return (
    <GalleryContainer>
      <SubHeader className="pt-0">
        <div className="sub-header gallery-sub-header">
          <img
            src="/images/Vault/gallery.png"
            alt=""
            loading="lazy"
            height={60}
          />
          <h4>
            Gallery
            <div>{`${text}. Pieces are collected when the Fund has ETH and as new drops happen`}</div>
          </h4>
        </div>
      </SubHeader>

      <GalleryList>
        {(list || []).map(({
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
            {getNftInfo(url, nftMetadata[index])}
          </Card>
        ))}
      </GalleryList>
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
  nftMetadata: PropTypes.arrayOf(PropTypes.shape({})),
};

Gallery.defaultProps = {
  list: [],
  nftMetadata: [],
};

export default Gallery;
