import React from 'react';
// import PropTypes from 'prop-types';
import { Progress, Input } from 'antd/lib';
import { COLOR } from 'util/theme';
import Warning from 'common-util/SVGs/warning';
import CustomButton from 'common-util/Button';
import {
  FundsContainer,
  SubHeader,
  FundingProgress,
  AddFunds,
} from '../styles';

const Fund = () => (
  <FundsContainer className="card-border">
    <SubHeader>
      <div className="sub-header">
        <img src="/images/Vault/fund.png" alt="" loading="lazy" height={48} />
        <h3>Fund</h3>
      </div>

      <div className="vault-status">OPEN</div>
    </SubHeader>

    <FundingProgress>
      <Progress
        percent={10}
        status="active"
        strokeColor={COLOR.PRIMARY}
        strokeWidth={30}
        showInfo={false}
      />
      <div className="funding-process-info">
        <div>0 ETH</div>
        <div>5 ETH</div>
        <div>
          <span>10 ETH</span>
          <span>(full)</span>
        </div>
      </div>
    </FundingProgress>

    <AddFunds>
      <div className="add-funds-header">
        <div>YOU FUNDED</div>
        <h3>0 ETH </h3>
      </div>

      <div className="add-funds-input">
        <Input />

        <CustomButton
          variant="green"
          onClick={() => window.console.log('first')}
        >
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
          <p>Management fee of -- ETH will be charged.</p>
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
    </AddFunds>
  </FundsContainer>
);

Fund.propTypes = {};

Fund.defaultProps = {};

export default Fund;
