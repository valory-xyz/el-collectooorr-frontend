import React from 'react';
import { SubHeader, ServiceContainer } from '../styles';

// TODO
const getStatus = (type = null) => {
  if (type) return 'collecting';
  return 'Collecting';
};

const History = () => (
  <ServiceContainer className="card-border">
    <SubHeader>
      <div className="sub-header">
        <img
          src="/images/Vault/gallery.png"
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
        <div>{getStatus()}</div>
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

export default History;
