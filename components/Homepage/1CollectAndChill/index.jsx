import React from 'react';
import Header from 'common-util/Header';
import { CustomButton } from 'common-util/Button';
import { btnStyle, Container, CollectAndChillContainer } from './styles';

const CollectAndChill = () => (
  <Container>
    <CollectAndChillContainer>
      <div className="header-row">
        <Header className="header" title="COLLECT AND CHILL" />
        <img
          src="/images/horizontal-arrow.png"
          alt=""
          loading="lazy"
          height={10}
        />
      </div>

      <div className="collect-chill-body">
        <div className="column-1">
          <div className="text">
            Fund and collect fractions of new Art Blocks drops with zero stress.
          </div>
          <img
            src="/images/horizontal-arrow.png"
            alt=""
            loading="lazy"
            height={10}
          />
        </div>

        <div className="column-2">
          <img
            src="/images/1CollectAndChill/text-box.png"
            alt=""
            loading="lazy"
          />
          <CustomButton type="primary" variant="red" style={btnStyle}>
            START COLLECTING
          </CustomButton>
        </div>
      </div>
    </CollectAndChillContainer>
  </Container>
);

export default CollectAndChill;
