import React from 'react';
import Header from 'common-util/Header';
import { Container, CollectionContainer } from './styles';

const EvolutionOfNftCollecting = () => (
  <Container>
    <CollectionContainer>
      <div className="header-column">
        <Header className="header" title="THE EVOLUTION OF NFT COLLECTING" />
        <img
          src="/images/vertical-arrow.png"
          alt=""
          loading="lazy"
          width={10}
        />
        <div className="text">
          El Collectooorr is an autonomous service that watches for new&nbsp;
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Art Blocks
          </a>
          &nbsp;drops and intelligently collects new works for you.
        </div>
      </div>
    </CollectionContainer>
  </Container>
);

export default EvolutionOfNftCollecting;
