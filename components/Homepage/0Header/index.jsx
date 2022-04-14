import React from 'react';
import Marquee from 'react-fast-marquee';
import { CustomButton } from 'common-util/Button';
import { btnStyle, SubHeaderContainer, HeaderContainer } from './styles';

export const Dash = () => (
  <>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;</>
);

const HeaderSection = () => (
  <>
    <HeaderContainer>
      <div className="column-1">
        <img
          src="/images/0Header/logo.png"
          alt="El collectooorr"
          loading="lazy"
        />
      </div>
      <div className="column-2">
        <CustomButton type="primary" variant="red" style={btnStyle}>
          START COLLECTING
        </CustomButton>
      </div>
    </HeaderContainer>

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

export default HeaderSection;
