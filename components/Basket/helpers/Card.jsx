import React from 'react';
// import { Button } from 'antd';
import styled from 'styled-components';
import { CustomButton } from 'common-util/Button';

export const Container = styled.div`
  width: 50%;
  /* border: 2px solid red; */
  padding: 2rem;
  border-radius: 1.5rem;
  background: #171717;
  display: flex;
  justify-content: center;

  h2 {
    margin-bottom: 2rem;
  }
  .left-side {
    min-width: 140px;
    .pool-logo {
      width: 96px;
      height: 48px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('/images/dummy.png');
    }
  }
  .right-side {
    .actions {
      margin-top: 2rem;
    }
  }
`;

export const TotalYours = styled.div`
  display: flex;
`;

export const Total = styled.div`
  padding-right: 3rem;
`;

export const Token = styled.div`
  color: #00ffd1;
`;

export const Yours = styled.div`
  .ant-btn {
    margin-right: 1rem;
  }
`;

const Card = () => (
  <Container>
    <div className="left-side">
      <div className="pool-logo" />
    </div>
    <div className="right-side">
      <h2>Pool</h2>
      <TotalYours>
        <Total>
          <div>TOTAL</div>
          <Token>19.00</Token>
        </Total>

        <Yours>
          <div>YOURS</div>
          <Token>0.1 = 0.05% pool stake</Token>

          <div className="actions">
            <CustomButton
              type="primary"
              variant="red"
              // icon={<PoweroffOutlined />}
            >
              Deposit
            </CustomButton>
            <CustomButton
              type="primary"
              variant="blue"
              // icon={<PoweroffOutlined />}
            >
              Withdraw
            </CustomButton>
          </div>
        </Yours>
      </TotalYours>
    </div>
  </Container>
);

export default Card;
