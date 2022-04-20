import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Card } from "antd/lib";
import { GalleryList, GalleryContainer, SubHeader } from "../styles";

const getImage = (type, { name, index, url, style }) => {
  if (type === "iframe") {
    return <iframe title={`basket-NFT-${index}`} src={url} />;
  }

  if (type === "image") return <img alt={name} src={url} style={style} />;

  return null;
};

const Gallery = ({ list }) => (
  <GalleryContainer>
    <SubHeader>
      <div className="sub-header">
        <img
          src="/images/Vault/gallery.png"
          alt=""
          loading="lazy"
          height={60}
        />
        <h4>Gallery</h4>
      </div>
    </SubHeader>

    <GalleryList>
      {list.map(({ name, type, url, style }, index) => (
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
  </GalleryContainer>
);

Gallery.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
};

Gallery.defaultProps = {
  list: [],
};

export default Gallery;
