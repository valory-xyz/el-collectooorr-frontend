import React from 'react';
import { useRouter } from 'next/router';
import Marquee from 'react-fast-marquee';
import { URL } from 'util/constants';
import { CustomButton } from 'common-util/Button';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
import Login from '../../Login';
import {
  getBtnStyle,
  HeaderContainer,
  RiskContainer,
  SubHeaderContainer,
} from './styles';

export const Dash = () => (
  <>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;</>
);

export const HeaderSection = () => {
  const isMobile = useCheckMobileScreen();
  const router = useRouter();
  const isRoot = router.pathname === URL.ROOT;

  const handleCollect = () => {};

  const handleHistory = () => {};

  return (
    <HeaderContainer className={isRoot ? '' : 'not-root-page'}>
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

      {!isRoot ? (
        <>
          <div className="nav-action-btns">
            <CustomButton variant="red" onClick={handleCollect}>
              COLLECT
            </CustomButton>
            <CustomButton variant="blue-border" onClick={handleHistory}>
              HISTORY
            </CustomButton>
          </div>

          <Login />
        </>
      ) : (
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
      )}
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
