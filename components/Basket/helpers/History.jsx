import React from 'react';
import { ServiceContainer } from '../styles';

// TODO
const getStatus = (type = null) => {
  if (type) return 'collecting';
  return 'Collecting';
};

const History = () => (
  <ServiceContainer>
    <h3>Service</h3>

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
