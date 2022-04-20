import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'util/theme';
import { SubHeader } from '../styles';

export const PoolContainer = styled.div``;

export const TotalYours = styled.div`
  display: flex;
  color: ${COLOR.GREY_1};
  .vault-info {
    &:nth-child(1) {
      width: 25%;
    }
    &:nth-child(2) {
      width: 40%;
    }
    .name {
    }
    .desc {
      margin: 0.25rem 0;
      font-size: 24px;
      color: ${COLOR.GREEN_3};
      text-transform: capitalize;
    }
  }
`;

export const VaultHeader = styled(SubHeader)`
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  .managed-by {
    width: 100%;
    text-align: right;

    /* ??? */
    position: absolute;
    right: 14px;
    top: 6px;
  }
`;

const Pool = () => (
  <PoolContainer>
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
  </PoolContainer>
);

export default Pool;
