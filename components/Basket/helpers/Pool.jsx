import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'util/theme';
import { SubHeader } from '../styles';

export const PoolContainer = styled.div`
  .managed-by {
    text-align: right;
  }
`;

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

const Pool = () => (
  <PoolContainer>
    <div className="managed-by">
      This vault is managed on&nbsp;
      <a href="http://google.com" target="_blank" rel="noopener noreferrer">
        Fractional
      </a>
    </div>

    <SubHeader>
      <div>
        <img
          src="/images/Vault/vault.png"
          alt=""
          loading="lazy"
          height={80}
        />
        <h3>Vault</h3>
      </div>
    </SubHeader>

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
