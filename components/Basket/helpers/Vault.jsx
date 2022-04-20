import React from 'react';
import { VaultContainer, TotalYours, VaultHeader } from '../styles';

const Vault = () => (
  <VaultContainer>
    <VaultHeader>
      <div className="managed-by">
        This vault is managed on&nbsp;
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          Fractional
        </a>
      </div>

      <div className="sub-header">
        <img src="/images/Vault/vault.png" alt="" loading="lazy" height={60} />
        <h3>Vault</h3>
      </div>
    </VaultHeader>

    <TotalYours>
      <div className="vault-info total">
        <div className="name">TOTAL</div>
        <div className="desc">10k VLT1</div>
      </div>

      <div className="vault-info reserve-price">
        <div className="name">RESERVE PRICE</div>
        <div className="desc">20 ETH</div>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          Vote for new reserve price
        </a>
      </div>

      <div className="vault-info yours">
        <div className="name">YOURS</div>
        <div className="desc">0 VLT1</div>
        <div>0% pool share</div>
      </div>
    </TotalYours>
  </VaultContainer>
);

export default Vault;
