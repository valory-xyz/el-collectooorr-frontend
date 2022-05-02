import React from 'react';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
import Twitter from 'common-util/SVGs/twitter';
import { Container, SubFooter } from './styles';

const Footer = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <Container>
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
              AUTONOLAS AGENT DEV ACADEMY COHORT 1
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
        <a
          href="https://twitter.com/autonolas"
          target="_blank"
          rel="noopener noreferrer"
          className="autonolas-twitter"
        >
          AUTONOLAS
          <Twitter />
        </a>

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
            APPLY FOR THE AGENT DEVELOPER&nbsp;
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
