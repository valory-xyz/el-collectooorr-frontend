import React from 'react';
import { useRouter } from 'next/router';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import { URL } from 'util/constants';
import RiskBanner from 'common-util/RiskBanner';
import { HeaderContainer, SubHeaderContainer } from './styles';

export const Dash = () => (
  <>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;</>
);

const linkToHome = (child, aClassName) => (
  <Link href="/">
    <a href="/" className={aClassName}>
      {child}
    </a>
  </Link>
);

export const HeaderSection = () => {
  const router = useRouter();
  const isRoot = router.pathname === URL.ROOT || router.pathname === URL.DOCUMENTATION;

  return (
    <HeaderContainer className={isRoot ? '' : 'not-root-page'}>
      <div className="column-1">
        {linkToHome(
          <img
            src="/images/0Header/el-collectooorr-logo.png"
            alt="El collectooorr"
            loading="lazy"
            height={64}
          />,
          'show-only-sm',
        )}
        {linkToHome(
          <img
            src="/images/0Header/el-collectooorr-text.png"
            alt="El collectooorr"
            loading="lazy"
            width={150}
            className="mb-8"
          />,
          'show-only-sm',
        )}
        {linkToHome(
          <img
            src="/images/0Header/logo.png"
            alt="El collectooorr"
            loading="lazy"
            width={300}
          />,
          'hide-only-sm',
        )}
      </div>
    </HeaderContainer>
  );
};

export default HeaderSection;

export const SubHeaderSection = () => {
  const text = 'THE WORLD\'S FIRST AUTONOMOUS NFT COLLECTOR DAO - JOIN LIMITED-SPACE WHITELIST';
  return (
    <>
      <RiskBanner />
      <SubHeaderContainer>
        <Marquee pauseOnHover gradient={false}>
          {text}
          <Dash />
          {text}
          <Dash />
          {text}
          <Dash />
        </Marquee>
      </SubHeaderContainer>
    </>
  );
};
