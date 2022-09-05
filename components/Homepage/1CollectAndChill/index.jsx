import React from 'react';
import { useRouter } from 'next/router';
import Header from 'common-util/Header';
import { LATEST_VAULT } from 'util/constants';
import { CustomButton } from 'common-util/Button';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
import { btnStyle, Container, CollectAndChillContainer } from './styles';

const CollectAndChill = () => {
  const router = useRouter();
  const isMobile = useCheckMobileScreen();
  const textBoxImage = (
    <img
      src="/images/1CollectAndChill/text-box.svg"
      alt=""
      loading="lazy"
      width={132}
      height={166}
    />
  );

  return (
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
          {isMobile && <div className="column-mobile">{textBoxImage}</div>}

          <div className="column-1">
            <div className="text">
              Fund and collect fractions of new Art Blocks drops with zero
              stress.
            </div>
            {!isMobile && (
              <img
                src="/images/horizontal-arrow.png"
                alt=""
                loading="lazy"
                height={10}
              />
            )}
          </div>

          <div className="column-2">
            {textBoxImage}
            <CustomButton
              variant="red"
              style={btnStyle}
              type="primary"
              onClick={() => router.push(LATEST_VAULT)}
            >
              {isMobile ? 'GO TO VAULT' : 'GO TO THE LATEST VAULT'}
            </CustomButton>
          </div>
        </div>
      </CollectAndChillContainer>
    </Container>
  );
};

export default CollectAndChill;
