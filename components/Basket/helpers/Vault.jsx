import React from 'react';
import PropTypes from 'prop-types';
import { VaultContainer, TotalYours, VaultHeader } from '../styles';

const TOTAL = 10000;
const URL = 'https://fractional.art/vaults/harambe-g7xnzq';

const Vault = ({ vaultReservePrice, vaultSymbol, vaultUserBalance }) => {
  const symbol = vaultSymbol || '--';
  const percentage = vaultUserBalance ? vaultUserBalance / TOTAL : 0;

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
          <div className="name">RESERVE PRICE</div>
          <div className="desc">{`${vaultReservePrice || '--'} ETH`}</div>
          <a href={URL} target="_blank" rel="noopener noreferrer">
            Vote for new reserve price
          </a>
        </div>

        <div className="vault-info yours">
          <div className="name">YOURS</div>
          <div className="desc">{`${vaultUserBalance} ${symbol}`}</div>
          <div>{`${percentage} % pool share`}</div>
        </div>
      </TotalYours>
    </VaultContainer>
  );
};

Vault.propTypes = {
  vaultReservePrice: PropTypes.string,
  vaultSymbol: PropTypes.string,
  vaultUserBalance: PropTypes.number,
};

Vault.defaultProps = {
  vaultReservePrice: null,
  vaultSymbol: null,
  vaultUserBalance: null,
};

export default Vault;
