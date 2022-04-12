import React from 'react';

import styled from 'styled-components';

export const PoolContainer = styled.div`
  .pool-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    h3 {
      margin: 0;
    }
  }
`;

export const TotalYours = styled.div`
  display: flex;
`;

export const Total = styled.div``;

export const ReservePrice = styled.div`
  padding: 0 4rem;
`;

export const Yours = styled.div`
  .ant-btn {
    margin-right: 1rem;
  }
`;

const Pool = () => (
  <PoolContainer>
    <div className="pool-header">
      <h3>Vault</h3>
      <div>
        This vault is managed on&nbsp;
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          Fractional
        </a>
      </div>
    </div>

    <TotalYours>
      <Total>
        <div>TOTAL</div>
        <div>10k VLT1</div>
      </Total>

      <ReservePrice>
        <div>RESERVE PRICE</div>
        <div>20 ETH</div>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          Vote for new reserve price
        </a>
      </ReservePrice>

      <Yours>
        <div>YOURS</div>
        <div>0 VLT1</div>
        <div>0% pool share</div>
      </Yours>
    </TotalYours>
  </PoolContainer>
);

export default Pool;
