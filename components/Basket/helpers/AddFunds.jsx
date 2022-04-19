import React from 'react';
import {
  Input,
  Button,
  // Typography
} from 'antd/lib';
import { AddFundsContainer } from '../styles';

// const { Paragraph } = Typography;

const AddFunds = () => {
  const handleAddFunds = () => {
    console.log('first');
  };

  return (
    <AddFundsContainer>
      <div className="add-funds-header">
        <h3>YOU FUNDED</h3>
        <div>0 ETH</div>
      </div>

      <div className="add-funds-input">
        <Input />
        <Button type="primary" onClick={handleAddFunds}>
          Add Funds
        </Button>
      </div>

      <div className="add-funds-info">
        <div>You will receive -- VLT1</div>
        <div>
          Management fee of -- ETH will be charged.&nbsp;
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </div>
        <div>
          Added ETH cannot be retrieved, but a secondary market for VLT1 may
          emerge.
        </div>
      </div>
    </AddFundsContainer>
  );
};

export default AddFunds;
