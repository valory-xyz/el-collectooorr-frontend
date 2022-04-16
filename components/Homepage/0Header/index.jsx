import React from 'react';
import Marquee from 'react-fast-marquee';
import { CustomButton } from 'common-util/Button';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
import { getBtnStyle, SubHeaderContainer, HeaderContainer } from './styles';

export const Dash = () => (
  <>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;</>
);

export const HeaderSection = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <HeaderContainer>
      <div className="column-1">
        {isMobile ? (
          <>
            <img
              src="/images/0Header/el-collectooorr-logo.png"
              alt="El collectooorr"
              loading="lazy"
              height={64}
            />
            <img
              src="/images/0Header/el-collectooorr-text.png"
              alt="El collectooorr"
              loading="lazy"
              width={150}
            />
          </>
        ) : (
          <img
            src="/images/0Header/logo.png"
            alt="El collectooorr"
            loading="lazy"
            width={300}
          />
        )}
      </div>
      <div className="column-2">
        <CustomButton type="primary" variant="red" style={getBtnStyle(isMobile)}>
          START COLLECTING
        </CustomButton>
      </div>
    </HeaderContainer>
  );
};

export default HeaderSection;

export const SubHeaderSection = () => (
  <>
    <SubHeaderContainer>
      <Marquee pauseOnHover gradient={false}>
        THE WORLD&apos;S FIRST AUTONOMOUS NFT COLLECTOR DAO
        <Dash />
        THE WORLD&apos;S FIRST AUTONOMOUS NFT
        <Dash />
        THE WORLD&apos;S FIRST AUTONOMOUS NFT COLLECTOR DAO
        <Dash />
        THE WORLD&apos;S FIRST AUTONOMOUS NFT
        <Dash />
      </Marquee>
    </SubHeaderContainer>
  </>
);
