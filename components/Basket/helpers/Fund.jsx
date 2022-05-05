import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Progress, Input, notification } from 'antd/lib';
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

  // -5% from the balance to account for fees.
  const getProgress = () => {
    const purchasedTokens = vaultTotalSupply - vaultBalanceOf;
    const progress = purchasedTokens * TOKEN_ETH_PRICE;
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
    try {
      await addFunds({ ether: value });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Some error occured while adding funds',
        style: { border: `1px solid ${COLOR.RED}` },
      });
    }

    try {
      // get balance once add funds is processed!
      const result = await getBalance(account);
      setUserBalance(result);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const onInputChange = (e) => {
    setvalue((current) => {
      const temp = e.target.validity.valid ? e.target.value : current;
      const finalValue = temp > vaultBalanceOf * TOKEN_ETH_PRICE ? current : temp;
      return finalValue;
    });
  };

  const isBtnDisabled = () => {
    if (Number(value) === 0) return true;
    const hasBalance = value ? value <= balance : false;
    // const vaultBalance = (vaultBalanceOf * TOKEN_ETH_PRICE); // TODO
    // return !hasBalance && (value > vaultBalance);
    return !hasBalance;
  };

  return (
    <FundsContainer className="card-border">
      <SubHeader>
        <div className="sub-header">
          <img src="/images/Vault/fund.png" alt="" loading="lazy" height={48} />
          <h3>Fund</h3>
        </div>

        <div className="vault-status">
          {vaultBalanceOf === 0 ? 'No longer accepting funds' : 'OPEN'}
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
          <div className="progress-start">0 ETH</div>
          <div className="progress-center">{`${getProgress()} ETH`}</div>
          <div className="progress-end">
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

        <div className="add-funds-form">
          <Input
            value={value}
            placeholder="0"
            pattern="^-?[0-9]\d*\.?\d*$"
            onChange={onInputChange}
            data-testid="add-funds-input"
          />
          <CustomButton
            variant={isBtnDisabled() ? 'disabled' : 'green'}
            disabled={isBtnDisabled()}
            onClick={handleAddFunds}
            data-testid="add-funds-button"
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
          <div className="you-will-receive">
            You will receive
            {` ${getUserReceiveVtk()} `}
            {vaultSymbol}
          </div>

          <div className="management-fees">
            <p>
              {`Management fee of ${getManagementFee()}% ETH will be charged.`}
            </p>
            <Link href="/coming-soon">
              <a href="/coming-soon">Learn more</a>
            </Link>
          </div>

          <div className="warning">
            <Warning />
            Added ETH cannot be retrieved, but a secondary market for
            {` ${vaultSymbol} `}
            may emerge.
          </div>
        </div>
      </AddFunds>
    </FundsContainer>
  );
};

Fund.propTypes = {
  vaultSymbol: PropTypes.string,
  userVTKBalance: PropTypes.number,
  vaultBalanceOf: PropTypes.number,
  vaultTotalSupply: PropTypes.number,
  account: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setUserBalance: PropTypes.func,
  setErrorMessage: PropTypes.func,
};

Fund.defaultProps = {
  vaultSymbol: null,
  userVTKBalance: null,
  vaultBalanceOf: 0,
  vaultTotalSupply: 0,
  balance: null,
  account: null,
  setUserBalance: () => {},
  setErrorMessage: () => {},
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
