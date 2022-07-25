import React from 'react';
import round from 'lodash/round';
import PropTypes from 'prop-types';
import NumbersAnimate from 'common-util/NumbersAnimate';
import { VAULT_ADDRESS } from 'common-util/AbiAndAddresses';
import { getRedirect } from 'common-util/functions';
import { VaultContainer, TotalYours, VaultHeader } from '../styles';

const URL = `https://fractional.art/vaults/${VAULT_ADDRESS}`;

const Vault = ({
  vaultReservePrice,
  vaultSymbol,
  userVTKBalance,
  vaultTotalSupply,
}) => {
  const symbol = vaultSymbol || 'TKN';
  const reservePrice = vaultReservePrice ? round(vaultReservePrice, 2) : '--';
  const getPercentage = () => {
    const temp = userVTKBalance ? userVTKBalance / vaultTotalSupply : 0;
    return round(temp * 100, 2);
  };

  return (
    <VaultContainer>
      <VaultHeader>
        <div className="managed-by">
          This vault is managed on&nbsp;
          <a href={URL} target="_blank" rel="noopener noreferrer">
            Fractional
          </a>
        </div>

        <div className="sub-header">
          <img
            src="/images/Vault/vault.png"
            alt=""
            loading="lazy"
            height={60}
          />
          <h3>Vault</h3>
        </div>
      </VaultHeader>

      <TotalYours>
        <div className="vault-info total">
          <div className="name">TOTAL</div>
          <div className="desc">{`${vaultTotalSupply / 1000}k ${symbol}`}</div>
        </div>

        <div className="vault-info reserve-price">
          <div className="name">
            RESERVE PRICE
            {getRedirect(
              "What's this?",
              '/documentation#section-collection-fractions',
            )}
          </div>

          <div className="desc">{`${reservePrice} ETH`}</div>

          <a href={URL} target="_blank" rel="noopener noreferrer">
            Vote for new reserve price
          </a>
        </div>

        <div className="vault-info yours">
          <div className="name">
            YOURS
            {getRedirect(
              `What's ${symbol}?`,
              '/documentation#section-collection-fractions',
            )}
          </div>
          <div className="desc">
            {userVTKBalance ? <NumbersAnimate value={userVTKBalance} /> : '--'}
            {` ${symbol}`}
          </div>
          <div>
            <NumbersAnimate value={getPercentage()} />
            % pool share
          </div>
        </div>
      </TotalYours>
    </VaultContainer>
  );
};

Vault.propTypes = {
  vaultReservePrice: PropTypes.string,
  vaultSymbol: PropTypes.string,
  userVTKBalance: PropTypes.number,
  vaultTotalSupply: PropTypes.number,
};

Vault.defaultProps = {
  vaultReservePrice: null,
  vaultSymbol: null,
  userVTKBalance: null,
  vaultTotalSupply: null,
};

export default Vault;
