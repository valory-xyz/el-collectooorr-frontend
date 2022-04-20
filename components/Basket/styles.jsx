import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const BasketContainer = styled.div`
  font-size: 16px;
  .ant-card {
    max-width: 232px;
    width: 100%;
    margin-bottom: 3rem;
    margin-right: 3rem;
    &-body {
      padding: 0;
    }
    &-meta {
      margin: 1rem 0;
    }
    .nft-info {
      div:nth-child(3) {
        display: flex;
      }
    }

    img,
    iframe {
      width: 100%;
      border: 0;
      padding: 0;
    }
  }

  .right-columm {
    padding-left: 2rem;
  }
`;

export const AddFundsContainer = styled.div`
  .add-funds {
    &-header {
      margin-bottom: 1rem;
      h3 {
        margin: 0;
      }
    }
    &-input {
      display: flex;
      align-items: center;
      .ant-input {
        flex: 2;
        margin-right: 1rem;
        padding: 12px;
        border-radius: 24px;
      }
      .ant-btn {
        flex: 1;
        height: 46px;
        border-radius: 24px;
        img {
          vertical-align: baseline;
          margin-right: 12px;
        }
      }
    }
    &-info {
      max-width: 400px;
      margin-top: 1rem;
      font-size: 16px;
      .warning {
        margin-top: 1rem;
        color: ${COLOR.RED};
        svg {
          margin-bottom: -2px;
        }
      }
    }
  }
`;

// new
export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  border: 1px solid ${COLOR.RED};
  border-radius: 20px 20px 0px 0;
  border-bottom: transparent;
  padding: 1rem 1rem 0 1rem ;

  .sub-header{
    display: flex;
    align-items: center;
    img {
      margin-right: 2rem;
      font-size: 24px;
    }
    h3 {
      font-size: 42px;
      margin: 0;
      line-height: normal;
    }
  }
  .vault-status {
    color: ${COLOR.GREEN_2};
  }
`;

export const FundingProgress = styled.div`
  position: relative;
  margin: 1rem 0;
  .ant-progress {
    .ant-progress-inner {
      border: 1px solid ${COLOR.GREY_2};
    }
  }
  .funding-process-info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    line-height: normal;
    > div:nth-child(2) {
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export const ServiceContainer = styled.div`
  .vault-service {
    display: flex;
    align-items: center;
    .vault-status {
      margin-right: 6rem;
    }
  }
`;
