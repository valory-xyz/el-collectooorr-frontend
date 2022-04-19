import styled from 'styled-components';
import { COLOR } from 'util/theme';

const C_WIDTH = '340px';

export const BasketContainer = styled.div`
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
    .ant-typography {
      font-size: 14px;
    }
  }

  .right-columm {
    padding-left: 2rem;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
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
      max-width: ${C_WIDTH};
      .ant-input {
        margin-right: 2rem;
        padding: 6px 12px;
      }
    }
    &-info {
      margin-top: 1rem;
    }
  }
`;

export const ServiceContainer = styled.div`
  max-width: ${C_WIDTH};
  .vault-service {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

// new
export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  > div:nth-child(1) {
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
  margin:  1rem 0;
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
