import React from 'react';
import PropTypes from 'prop-types';
import LinkIcon from 'common-util/SVGs/link';
import { SubHeader, ServiceContainer } from '../styles';

const Service = ({ isVaultClosed }) => (
  <ServiceContainer className="card-border">
    <SubHeader className="pt-0">
      <div className="sub-header">
        <img
          src="/images/Vault/service-icon.png"
          alt=""
          loading="lazy"
          height={72}
        />
        <h4>Service</h4>
      </div>

      <div />
    </SubHeader>

    <div className="vault-service">
      <div className="vault-status">
        <div>STATUS</div>
        <div>{isVaultClosed ? 'Closed' : 'Collecting'}</div>
      </div>

      <div className="vault-history">
        <div>HISTORY</div>
        <div>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            View on Etherscan
            <LinkIcon />
          </a>
        </div>
      </div>
    </div>
  </ServiceContainer>
);

Service.propTypes = {
  isVaultClosed: PropTypes.bool,
};

Service.defaultProps = {
  isVaultClosed: false,
};

export default Service;
