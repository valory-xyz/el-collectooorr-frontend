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
  .right-columm {
    padding-left: 1rem;
  }
  .card-border {
    padding: 1rem;
    border-radius: 20px;
  }
  a {
    color: ${COLOR.GREY_1} !important;
    svg {
      margin-left: 4px;
      margin-bottom: -2px;
    }
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

/* ------------- Gallery ------------- */
export const GalleryContainer = styled.div`
  padding: 1rem;
  border-radius: 0;
  border: 1px solid ${COLOR.BLUE};
  border-top: transparent;
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
        color: ${COLOR.GREEN_1};
      }
    }
    .nft-info {
      .live-view {
        text-decoration: none;
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
`;

export const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .nft-img {
    background-color: ${COLOR.BORDER_GREY};
  }
`;
