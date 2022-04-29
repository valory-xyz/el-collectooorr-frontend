import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress, Input } from 'antd/lib';
import get from 'lodash/get';
import { COLOR } from 'util/theme';
import { getBalance } from 'common-util/functions';
import Warning from 'common-util/SVGs/warning';
import CustomButton from 'common-util/Button';
import {
  setUserBalance as setUserBalanceFn,
  setErrorMessage as setErrorMessageFn,
} from 'store/setup/actions';
import { addFunds } from '../utils';
import {
  FundsContainer,
  SubHeader,
  FundingProgress,
  AddFunds,
} from '../styles';

const FEE = 0.05; // 5 percent
const TOKEN_ETH_PRICE = 0.001;
const TOTAL_ETH = 10;

const Fund = ({
  isVaultClosed,
  vaultSymbol,
  userVTKBalance,
  vaultTotalSupply,
  vaultBalanceOf,
  account,
  balance,
  setUserBalance,
  setErrorMessage,
}) => {
  const [value, setvalue] = useState();
  const isValidValue = value ? value <= balance : false;

  // -5% from the balance to account for fees.
  const getProgress = () => {
    const purchasedTokens = vaultTotalSupply - vaultBalanceOf;
    const progress = (purchasedTokens * TOKEN_ETH_PRICE);
    return progress || 0;
  };
  const getYouFunded = () => (userVTKBalance ? userVTKBalance * TOKEN_ETH_PRICE : 0);
  const getUserReceiveVtk = () => {
    if (!value) return '--';
    const totalVtk = value / TOKEN_ETH_PRICE;
    const actualVtk = totalVtk - totalVtk * FEE; // user will receive => total - fee
    return actualVtk.toLocaleString();
  };
  const getManagementFee = () => FEE * 100; // convert to percentage

  /**
   * handle add funds
   */
  const handleAddFunds = async () => {
    await addFunds({ ether: value });
    // get balance once add funds is processed!
    try {
      const result = await getBalance(account);
      setUserBalance(result);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <FundsContainer className="card-border">
      <SubHeader>
        <div className="sub-header">
          <img src="/images/Vault/fund.png" alt="" loading="lazy" height={48} />
          <h3>Fund</h3>
        </div>

        <div className="vault-status">
          {isVaultClosed ? 'No longer accepting funds' : 'OPEN'}
        </div>
      </SubHeader>

      <FundingProgress>
        <Progress
          percent={getProgress() * TOTAL_ETH}
          strokeColor={COLOR.GREEN_2}
          strokeWidth={30}
          showInfo={false}
        />
        <div className="funding-process-info">
          <div>0 ETH</div>
          <div>{`${getProgress()} ETH`}</div>
          <div>
            <span>{`${TOTAL_ETH} ETH`}</span>
            <span>(full)</span>
          </div>
        </div>
      </FundingProgress>

      <AddFunds>
        <div className="add-funds-header">
          <div>YOU FUNDED</div>
          <h3>{`${getYouFunded()} ETH`}</h3>
        </div>

        <div className="add-funds-input">
          <Input
            value={value}
            placeholder="0"
            onChange={(e) => setvalue(e.target.value)}
          />
          <CustomButton
            variant={isValidValue ? 'green' : 'disabled'}
            disabled={!isValidValue}
            onClick={handleAddFunds}
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
          <div>
            You will receive&nbsp;
            {getUserReceiveVtk()}
            &nbsp;
            {vaultSymbol}
          </div>
          <div>
            <p>
              {`Management fee of ${getManagementFee()}% ETH will be charged.`}
            </p>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
          <div className="warning">
            <Warning />
            &nbsp;Added ETH cannot be retrieved, but a secondary market for
            &nbsp;
            {vaultSymbol}
            &nbsp; may emerge.
          </div>
        </div>
      </AddFunds>
    </FundsContainer>
  );
};

Fund.propTypes = {
  isVaultClosed: PropTypes.bool,
  vaultSymbol: PropTypes.string,
  userVTKBalance: PropTypes.number,
  vaultBalanceOf: PropTypes.number,
  vaultTotalSupply: PropTypes.number,
  account: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  setUserBalance: PropTypes.func.isRequired,
  balance: PropTypes.number,
  setErrorMessage: PropTypes.func.isRequired,
};

Fund.defaultProps = {
  isVaultClosed: false,
  vaultSymbol: null,
  userVTKBalance: null,
  vaultBalanceOf: 0,
  vaultTotalSupply: 0,
  balance: null,
  account: null,
};

const mapStateToProps = (state) => {
  const { account, balance } = get(state, 'setup', {});
  return { account, balance };
};

const mapDispatchToProps = {
  setUserBalance: setUserBalanceFn,
  setErrorMessage: setErrorMessageFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Fund);