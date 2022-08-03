import React from 'react';
import { useRouter } from 'next/router';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import { URL, WHITELIST_LINK } from 'util/constants';
// import { TOKEN_ID, URL } from 'util/constants';
import { CustomButton } from 'common-util/Button';
import RiskBanner from 'common-util/RiskBanner';
import Login from '../../Login';
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

  const readDocsBtn = (
    <CustomButton
      variant="blue"
      onClick={() => router.push('/documentation')}
      type="primary"
    >
      READ DOCS
    </CustomButton>
  );
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

      <div className="column-2">
        {readDocsBtn}
        {!isRoot ? (
          <Login />
        ) : (
          <>
            <CustomButton
              variant="red"
              type="primary"
              onClick={() => window.open(WHITELIST_LINK, 'target')}
            >
              JOIN WHITELIST
            </CustomButton>
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default HeaderSection;

export const SubHeaderSection = () => (
  <>
    <RiskBanner />
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
