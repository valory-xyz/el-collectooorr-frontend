import React from 'react';
import PropTypes from 'prop-types';
import round from 'lodash/round';
import { VAULT_ADDRESS } from 'common-util/AbiAndAddresses';
import { VaultContainer, TotalYours, VaultHeader } from '../styles';

const TOTAL = 10000;
const URL = `https://fractional.art/vaults/${VAULT_ADDRESS}`;

const Vault = ({ vaultReservePrice, vaultSymbol, userVTKBalance }) => {
  const symbol = vaultSymbol || 'TKN';
  const percentage = userVTKBalance ? userVTKBalance / TOTAL : 0;

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
          <div className="desc">{`10k ${symbol}`}</div>
        </div>

        <div className="vault-info reserve-price">
          <div className="name">
            RESERVE PRICE
            <a
              href="https://gnosis-safe.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              What&apos;s this?
            </a>
          </div>
          <div className="desc">
            {`${
              round(vaultReservePrice, 2) || '--'
            } ETH`}

          </div>
          <a href={URL} target="_blank" rel="noopener noreferrer">
            Vote for new reserve price
          </a>
        </div>

        <div className="vault-info yours">
          <div className="name">YOURS</div>
          <div className="desc">{`${userVTKBalance} ${symbol}`}</div>
          <div>{`${round(percentage, 2)}% pool share`}</div>
        </div>
      </TotalYours>
    </VaultContainer>
  );
};

Vault.propTypes = {
  vaultReservePrice: PropTypes.string,
  vaultSymbol: PropTypes.string,
  userVTKBalance: PropTypes.number,
};

Vault.defaultProps = {
  vaultReservePrice: null,
  vaultSymbol: null,
  userVTKBalance: null,
};

export default Vault;
