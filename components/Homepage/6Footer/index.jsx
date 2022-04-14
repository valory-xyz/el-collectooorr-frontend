import React from 'react';
import { Container, SubFooter } from './styles';

const Footer = () => (
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
          href="https://www.autonolas.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ARDIAN ABAZI
        </a>
        &nbsp;AND THE&nbsp;
        <a
          href="https://www.autonolas.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AUTONOLAS AGENT DEV ACADEMY COHORT 1
        </a>
      </div>

      <img src="/images/right-arrow.png" alt="" loading="lazy" height={10} />
    </div>

    <SubFooter>
      <a
        href="https://www.autonolas.network/"
        target="_blank"
        rel="noopener noreferrer"
      >
        AUTONOLAS TWITTER
      </a>

      <div className="sub-footer-text">
        <span>WANT TO PUT EL COLLECTOOORR TO WORK FOR YOUR DAO? REACH OUT</span>
        <span>
          TO&nbsp;
          <a
            href="https://www.autonolas.network/"
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

export default Footer;
