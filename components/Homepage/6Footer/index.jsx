import React from 'react';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
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
          AUTONOLAS TWITTER
        </a>

        <div className="sub-footer-text">
          <span>
            WANT TO PUT EL COLLECTOOORR TO WORK FOR YOUR DAO? REACH OUT
          </span>
          <span>
            TO&nbsp;
            <a
              href="mailto:bd@valory.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              AUTONOLAS BUSINESS DEVELOPMENT
            </a>
            &nbsp;OR APPLY FOR THE
          </span>
          <span>AGENT DEVELOPER ACADEMY</span>
        </div>
      </SubFooter>
    </Container>
  );
};

export default Footer;
