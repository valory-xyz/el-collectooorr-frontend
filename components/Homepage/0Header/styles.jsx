import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { MetamaskContainer } from 'components/Login/styles';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid ${COLOR.GREY_1};
  background-color: ${COLOR.BLACK};
  .column-2 {
    display: flex;
    align-items: center;
    button.ant-btn-primary {
      border-radius: 0 20px 20px 0 !important;
      height: auto;
      &:nth-child(1) {
        width: 180px;
        margin-right: 1rem;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    margin-bottom: 0;
    .column-1 {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 16px;
      line-height: normal;
    }
    .column-2 {
      button.ant-btn-primary {
        width: auto;
      }
    }
  }

  /* nav-bar for pages except landing-page */
  ${MEDIA_QUERY.mobileL} {
    margin-bottom: 0;
    .column-1 {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 16px;
    }
    .column-2 {
      width: 40%;
      flex-direction: column;
      button.ant-btn-primary {
        width: 100%;
        padding: 6px 12px !important;
        &:nth-child(1) {
          margin-right: 0;
          margin-bottom: 1rem;
        }
      }
    }
    &.not-root-page {
      flex-direction: column;
      .column-1 {
        flex-direction: row;
        align-items: center;
      }
      ${MetamaskContainer} {
        flex-direction: row;
        .dash {
          display: block;
          margin-top: -4px;
        }
      }
    }
  }

  ${MEDIA_QUERY.mobileS} {
    .column-1 {
      a {
        /* logo */
        &:nth-child(1) img {
          height: 40px;
        }
        /* el-col text */
        &:nth-child(2) img {
          width: 120px;
        }
      }
    }
  }
`;

export const SubHeaderContainer = styled.div`
  padding: 0.5rem 1rem 0.25rem 1rem;
  margin-bottom: 1rem;
  font-family: "minecraft";
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid ${COLOR.GREY_1};
  background-color: ${COLOR.BLACK};

  ${MEDIA_QUERY.tablet} {
    font-size: 14px;
  }
`;
