import styled, { css } from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

const regularFontStyles = css`
  color: ${COLOR.GREY_1};
  font-size: 16px;
  font-family: "spacegrotesk__regular";
  font-weight: 300;
`;

export const BasketContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  ${regularFontStyles}
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
      &-title {
        color: ${COLOR.GREEN_2};
      }
    }
    .nft-info {
      .live-view {
        text-decoration: none;
        svg {
          margin-left: 4px;
          margin-bottom: -2px;
        }
      }
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
    padding-left: 1rem;
  }
  .card-border {
    padding: 1rem;
    border-radius: 20px;
  }
  a {
    color: ${COLOR.GREY_1};
  }

  ${MEDIA_QUERY.desktop} {
    .ant-card:nth-child(even) {
      margin-right: 0;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .right-columm {
      padding-left: 0rem;
    }
    .ant-card {
      max-width: 100%;
      margin-right: 0;
      &-body {
        img {
          height: auto !important;
        }
      }
    }
  }
`;

/* ------------- COMMON ------------- */
export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-top: 1rem;
  .sub-header {
    display: flex;
    align-items: center;
    img {
      margin-right: 2rem;
      font-size: 24px;
    }
    h3,
    h4 {
      margin: 0;
      line-height: normal;
      font-family: "spacegrotesk__bold";
    }
    h3 {
      font-size: 48px;
    }
    h4 {
      font-size: 36px;
    }
    /* sub-header for each section */
    &.gallery-sub-header {
      h4 {
        div {
          ${regularFontStyles}
        }
      }
    }
  }
  .vault-status {
    font-family: "spacegrotesk__bold";
    color: ${COLOR.GREEN_2};
  }
  &.pt-0 {
    padding-top: 0rem;
  }
`;

/* ------------- FUNDS ------------- */
export const FundsContainer = styled.div`
  border: 1px solid ${COLOR.GREEN_2};
`;

export const AddFunds = styled.div`
  .add-funds {
    &-header {
      margin-bottom: 1rem;
      h3 {
        margin: 0;
        font-family: "spacegrotesk__semibold";
        font-size: 24px;
        line-height: normal;
      }
    }
    &-input {
      display: flex;
      align-items: center;
      .ant-input {
        flex: 3;
        margin-right: 1rem;
        padding: 8px 24px;
        border-radius: 24px;
        font-size: 18px;
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
      max-width: 340px;
      margin-top: 1.5rem;
      line-height: normal;
      > div {
        &:nth-child(1) {
          margin-bottom: 0.75rem;
        }
        &:nth-child(2) {
          p {
            margin: 0;
          }
        }
        &.warning {
          margin-top: 4rem;
          color: ${COLOR.RED};
          svg {
            margin-bottom: -2px;
          }
        }
      }
    }
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

/* ------------- SERVICE ------------- */
export const ServiceContainer = styled.div`
  margin-top: 1rem;
  border: 1px solid ${COLOR.PURPLE};
  .vault-service {
    display: flex;
    align-items: center;
    .vault-status {
      margin-right: 6rem;
    }
  }

  ${MEDIA_QUERY.tablet} {
    margin-bottom: 1rem;
  }
`;

/* ------------- VAULT ------------- */
export const VaultContainer = styled.div`
  padding: 1rem;
  border-radius: 20px 20px 0 0;
  border: 1px solid ${COLOR.BLUE};
`;

export const TotalYours = styled.div`
  display: flex;
  .vault-info {
    &:nth-child(1) {
      width: 25%;
    }
    &:nth-child(2) {
      width: 40%;
      a {
        font-size: 14px;
      }
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
    position: absolute;
    right: 14px;
    top: -8px;
    width: 100%;
    text-align: right;
    font-size: 14px;
  }
`;

/* ------------- Gallery ------------- */
export const GalleryContainer = styled.div`
  padding: 1rem;
  border-radius: 0;
  border: 1px solid ${COLOR.BLUE};
  border-top: transparent;
`;

export const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .nft-img {
    background-color: ${COLOR.BORDER_GREY};
  }
`;
