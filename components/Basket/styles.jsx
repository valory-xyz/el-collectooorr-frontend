import styled from 'styled-components';

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

export const FundingProgress = styled.div`
  position: relative;
  margin: 1rem 0;
  max-width: ${C_WIDTH};

  .funding-process-info {
    display: flex;
    justify-content: space-between;
    > div:nth-child(2) {
      position: absolute;
      top: 2px;
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
