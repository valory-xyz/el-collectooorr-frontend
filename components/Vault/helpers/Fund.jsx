import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress, Input, notification } from 'antd/lib';
import round from 'lodash/round';
import get from 'lodash/get';
import { COLOR } from 'util/theme';
import NumbersAnimate from 'common-util/NumbersAnimate';
import { getBalance, getRedirect } from 'common-util/functions';
import Warning from 'common-util/SVGs/warning';
import CustomButton from 'common-util/Button';
import {
  setUserBalance as setUserBalanceFn,
  setErrorMessage as setErrorMessageFn,
} from 'store/setup/actions';
import { addFunds } from '../utils';
import WHITELIST_ADDRESSES from './whitelist-addresses.json';
import {
  FundsContainer,
  SubHeader,
  FundingProgress,
  AddFunds,
} from '../styles';

const MANAGEMENT_FEE = 0.05; // 5 percent
const VTK_ETH_PRICE = 0.01;
const FUND_CAP_IN_ETH = 10;

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
  const [value, setValue] = useState();
  const hasBalance = value ? Number(value) <= Number(balance) : false;

  // -5% from the balance to account for fees.
  const getProgress = () => {
    const purchasedTokens = vaultTotalSupply - vaultBalanceOf;
    const progress = purchasedTokens * VTK_ETH_PRICE;
    return round(progress, 2) || 0;
  };
  const getYouFunded = () => round(userVTKBalance ? userVTKBalance * VTK_ETH_PRICE : 0, 2);
  const getUserReceiveVtk = () => {
    if (!value) return '--';
    const totalVtk = value / VTK_ETH_PRICE;
    const actualVtk = totalVtk - totalVtk * MANAGEMENT_FEE; // user will receive => total - fee
    return actualVtk.toLocaleString();
  };
  const getManagementFee = () => MANAGEMENT_FEE * 100; // convert to percentage

  /**
   * handle add funds
   */
  const handleAddFunds = async () => {
    /**
     * get balance once add funds is processed & once balance
     * is updated, all the other API's  will be fetched once again!
     */
    try {
      await addFunds({ ether: value, vaultSymbol });
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
    setValue((current) => {
      const temp = e.target.validity.valid ? e.target.value : current;
      const finalValue = temp > vaultBalanceOf * VTK_ETH_PRICE ? current : temp;
      return finalValue;
    });
  };

  // only white-listed address will be able to add funds
  const isWhitelisted = WHITELIST_ADDRESSES.addresses.find(
    (e) => e.toLowerCase() === (account || '').toLowerCase(),
  );

  // close vault if 99%, ie if 10ELC is remaining then it is 99%.
  const isVaultClosed = vaultBalanceOf === 10;

  const isBtnDisabled = () => {
    // disable button when metamask is not connected!
    if (!account || !isWhitelisted) return true;

    if (Number(value) === 0) return true;
    if (isVaultClosed) return true; // no balance left

    // const vaultBalance = (vaultBalanceOf * VTK_ETH_PRICE); // TODO
    // return !hasBalance && (value > vaultBalance);
    return !hasBalance;
  };

  const fundBtnError = () => {
    if (!account) return 'Connect wallet to add funds';
    if (!isWhitelisted) {
      return (
        <>
          Can’t deposit funds - your address is not whitelisted.&nbsp;
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfA0ux4SYIA64rXta82JSU2c5zECoFQuABQQ90Lns-ZbNYCiA/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply for whitelisting
          </a>
          .
        </>
      );
    }
    if (value === '' || value === undefined) return '';
    if (!hasBalance) return 'Not enough ETH in wallet';
    return '';
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
          percent={getProgress() * FUND_CAP_IN_ETH}
          strokeColor={COLOR.GREEN_2}
          strokeWidth={30}
          showInfo={false}
        />
        <div className="funding-process-info">
          <div className="progress-start">0 ETH</div>
          <div className="progress-center">
            <NumbersAnimate value={getProgress()} />
            {' ETH'}
          </div>
          <div className="progress-end">
            <span>{`${FUND_CAP_IN_ETH} ETH`}</span>
            <span>(full)</span>
          </div>
        </div>
      </FundingProgress>

      <AddFunds>
        <div className="add-funds-header">
          <div>YOU FUNDED</div>
          <h3>
            <NumbersAnimate value={getYouFunded()} />
            {' ETH'}
          </h3>
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

        <div className="add-funds-input-warning">{fundBtnError()}</div>

        <div className="add-funds-info">
          <div className="you-will-receive">
            {`You will receive ${getUserReceiveVtk()} ${vaultSymbol}`}
          </div>
          <div className="management-fees">
            <span>
              {`Management fee of ${getManagementFee()}% of your added funds will be charged.`}
            </span>
            {getRedirect('Learn more', '/documentation#section-management-fee')}
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
