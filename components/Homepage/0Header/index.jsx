import React from 'react';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import { CustomButton } from 'common-util/Button';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
import {
  getBtnStyle,
  HeaderContainer,
  RiskContainer,
  SubHeaderContainer,
} from './styles';

export const Dash = () => (
  <>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;</>
);

const linkToHome = (child) => (
  <Link href="/">
    <a href="/">{child}</a>
  </Link>
);

export const HeaderSection = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <HeaderContainer>
      <div className="column-1">
        {isMobile ? (
          <>
            {linkToHome(
              <img
                src="/images/0Header/el-collectooorr-logo.png"
                alt="El collectooorr"
                loading="lazy"
                height={64}
              />,
            )}
            {linkToHome(
              <img
                src="/images/0Header/el-collectooorr-text.png"
                alt="El collectooorr"
                loading="lazy"
                width={150}
              />,
            )}
          </>
        ) : (
          linkToHome(
            <img
              src="/images/0Header/logo.png"
              alt="El collectooorr"
              loading="lazy"
              width={300}
            />,
          )
        )}
      </div>
      <div className="column-2">
        <CustomButton
          type="primary"
          variant="disabled"
          disabled
          style={getBtnStyle(isMobile)}
        >
          COMING SOON
          {/* START COLLECTING */}
        </CustomButton>
      </div>
    </HeaderContainer>
  );
};

export default HeaderSection;

export const SubHeaderSection = () => (
  <>
    <RiskContainer>
      !!! DEPOSIT FUNDS AT YOUR OWN RISK. UNAUDITED PRODUCT !!!
    </RiskContainer>

    <SubHeaderContainer>
      <Marquee pauseOnHover gradient={false}>
        THE WORLD&apos;S FIRST AUTONOMOUS NFT COLLECTOR DAO
        <Dash />
        THE WORLD&apos;S FIRST AUTONOMOUS NFT COLLECTOR DAO
        <Dash />
        THE WORLD&apos;S FIRST AUTONOMOUS NFT COLLECTOR DAO
        <Dash />
      </Marquee>
    </SubHeaderContainer>
  </>
);
