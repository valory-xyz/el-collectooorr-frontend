import { Button } from 'antd';
import React from 'react';

import styled from 'styled-components';

export const TotalYours = styled.div`
  display: flex;
`;

export const Total = styled.div`
  padding-right: 3rem;
`;

export const Yours = styled.div`
  .ant-btn {
      margin-right: 1rem;
    }
`;

const Pool = () => (
  <div>
    <div>Pool</div>
    <TotalYours>
      <Total>
        <div>TOTAL</div>
        <div>19.00</div>
      </Total>

      <Yours>
        <div>YOURS</div>
        <div>0.1 = 0.05% pool stake</div>
        <div>
          <Button type="primary" ghost>
            Deposit
          </Button>
          <Button type="primary" ghost>
            Withdraw
          </Button>
        </div>
      </Yours>
    </TotalYours>

    <br />
    <div>Tokens</div>
    <TotalYours>
      <Total>
        <div>TOTAL</div>
        <div>10k VLT1</div>
      </Total>

      <Yours>
        <div>YOURS</div>
        <div>500 VLT1</div>
        <div>
          <Button type="primary" ghost>
            Claim
          </Button>
        </div>
      </Yours>
    </TotalYours>
  </div>
);

export default Pool;
