import React from 'react';
import PropTypes from 'prop-types';
import { SubHeader, ServiceContainer } from '../styles';

const getStatus = (type = null) => {
  switch (type) {
    case '0':
      return 'Collecting';
    case '1':
    default:
      return 'Closed';
  }
};

const Service = ({ vaultStatus }) => (
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
        <div>{getStatus(vaultStatus) || '--'}</div>
      </div>

      <div className="vault-history">
        <div>HISTORY</div>
        <div>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            View on Etherscan
          </a>
        </div>
      </div>
    </div>
  </ServiceContainer>
);

Service.propTypes = {
  vaultStatus: PropTypes.string,
};

Service.defaultProps = {
  vaultStatus: null,
};

export default Service;
