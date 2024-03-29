import React from 'react';
import { useRouter } from 'next/router';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
import Twitter from 'common-util/SVGs/twitter';
import Discord from 'common-util/SVGs/discord';
import { Container, SubFooter } from './styles';

/* eslint-disable-next-line react/prop-types */
const getLink = ({ href, children, className = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);

const Footer = () => {
  const isMobile = useCheckMobileScreen();
  const router = useRouter();

  return (
    <Container
      style={
        router.pathname.includes('vaults/') ? { paddingBottom: '120px' } : {}
      }
    >
      <div className="footer-logo-container">
        <img
          src="/images/6Footer/el-collectooorr-footer.png"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="built-by">
        <img src="/images/left-arrow.png" alt="" loading="lazy" height={10} />

        <div className="text">
          <div className="sub-text">
            BUILT BY&nbsp;
            <a
              href="https://twitter.com/0x61726469616e"
              target="_blank"
              rel="noopener noreferrer"
            >
              ARDIAN ABAZI
            </a>
            &nbsp;AND THE&nbsp;
            <a
              href="https://autonolas.medium.com/agent-dev-academy-everything-you-need-to-know-cc54b64d5a08"
              target="_blank"
              rel="noopener noreferrer"
            >
              AUTONOLAS ACADEMY COHORT 1
            </a>
          </div>
          <div className="sub-text">
            OPERATED BY INDEPENDENT AGENT OPERATORS.
          </div>
        </div>

        {!isMobile && (
          <img
            src="/images/right-arrow.png"
            alt=""
            loading="lazy"
            height={10}
          />
        )}
      </div>

      <SubFooter>
        <div className="socials">
          {getLink({
            href: 'https://twitter.com/autonolas',
            children: 'SUPPORTED BY AUTONOLAS',
            className: 'autonolas-twitter',
          })}

          {getLink({
            href: 'https://twitter.com/autonolas',
            children: <Twitter />,
          })}

          {getLink({
            href: 'https://discord.com/invite/z2PT65jKqQ',
            children: <Discord />,
          })}
        </div>

        <div className="sub-footer-text">
          <span>WANT TO PUT EL COLLECTOOORR TO WORK FOR YOUR DAO?</span>
          <span>
            REACH OUT TO&nbsp;
            <a
              href="mailto:bd@valory.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              AUTONOLAS BUSINESS DEVELOPMENT
            </a>
            &nbsp;OR&nbsp;
          </span>
          <span>
            APPLY FOR THE&nbsp;
            <a
              href="https://autonolas.medium.com/agent-dev-academy-everything-you-need-to-know-cc54b64d5a08"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACADEMY
            </a>
          </span>
        </div>
      </SubFooter>
    </Container>
  );
};

export default Footer;
