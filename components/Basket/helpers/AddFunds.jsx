import React from 'react';
import { Input } from 'antd/lib';
import CustomButton from 'common-util/Button';
import Warning from 'common-util/SVGs/warning';
import { AddFundsContainer } from '../styles';

const AddFunds = () => {
  const handleAddFunds = () => {
    window.console.log('first');
  };

  return (
    <AddFundsContainer>
      <div className="add-funds-header">
        <h3>YOU FUNDED</h3>
        <div>0 ETH</div>
      </div>

      <div className="add-funds-input">
        <Input />

        <CustomButton variant="green" onClick={handleAddFunds}>
          <img
            src="/images/Vault/button-deposit.png"
            alt=""
            loading="lazy"
            height={12}
          />
          Add Funds
        </CustomButton>
      </div>

      <div className="add-funds-info">
        <div>You will receive -- VLT1</div>
        <div>
          Management fee of -- ETH will be charged.&nbsp;
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </div>
        <div className="warning">
          <Warning />
          &nbsp; Added ETH cannot be retrieved, but a secondary market for VLT1
          may emerge.
        </div>
      </div>
    </AddFundsContainer>
  );
};

export default AddFunds;
