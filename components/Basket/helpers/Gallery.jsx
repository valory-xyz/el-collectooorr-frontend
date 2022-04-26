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

  return null;
};

const Gallery = ({ list }) => {
  const { length } = list || [];
  const text = `${length} piece${length >= 2 ? 's' : ''} collected`;

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
            <div>{text}</div>
          </h4>
        </div>
      </SubHeader>

      <GalleryList>
        {(list || []).map(
          (
            {
              name,
              type,
              url,
              style,
              // txn,
            },
            index,
          ) => (
            <Card key={`basket-${index}`} bordered={false}>
              {getImage(type, {
                index,
                url,
                name,
                style,
              })}

              <Card.Meta title={name} />
              <div className="nft-info">
                {/* <div>Robert</div> */}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-view"
                >
                  Live View
                  <LinkIcon />
                </a>
                {/* <div>
              Bought: 0.1 ETH&nbsp;&bull;&nbsp;12/1&nbsp;&bull;&nbsp;
              <span>
                <a href={txn} target="_blank" rel="noopener noreferrer">
                  Txn
                </a>
              </span>
            </div> */}
              </div>
            </Card>
          ),
        )}
      </GalleryList>
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
};

Gallery.defaultProps = {
  list: [],
};

export default Gallery;
