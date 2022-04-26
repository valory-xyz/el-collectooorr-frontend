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
