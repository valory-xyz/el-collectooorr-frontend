import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const Container = styled.div`
  margin-bottom: 2rem;
  border: 1px solid ${COLOR.BLUE};
  border-radius: 20px;
  background-color: ${COLOR.BLACK};
  .header-container {
    padding: 1rem 0 0 0.5rem;
    letter-spacing: 0;
    img {
      margin-top: -16px;
      height: 10.5px;
    }
  }
  .benefits-row {
    display: flex;
  }

  ${MEDIA_QUERY.tabletL} {
    .benefits-row {
      flex-wrap: wrap;
    }
  }
`;

export const EachBenefit = styled.div`
  max-width: 25%;
  padding: 1rem 1.5rem 1.5rem 1rem;
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    margin-bottom: 2rem;
    img {
      width: 120px;
    }
  }
  .name {
    min-height: 5rem;
    font-size: 20px;
    font-family: "spacegrotesk__bold";
    letter-spacing: 0.05em;
  }
  .desc {
    line-height: normal;
  }
  &:not(:last-child) {
    border-right: 1px solid ${COLOR.BLUE};
  }

  &.benefit-1 img {
    width: 212px;
  }
  &.benefit-2 img {
    width: 198px;
  }
  &.benefit-3 img {
    width: 256px;
  }
  &.benefit-4 img {
    width: 198px;
  }

  ${MEDIA_QUERY.tabletL} {
    max-width: 50%;
    padding: 1rem 1rem 2rem 1rem;
    border-right: none !important;
    .image-container {
      height: 150px;
      margin-bottom: 0rem;
    }
    .name {
      line-height: 26px;
      min-height: 54px;
    }
    &.benefit-1 {
      border-bottom: 1px solid ${COLOR.BLUE};
      img {
        width: 190px;
      }
    }
    &.benefit-2 {
      border-bottom: 1px solid ${COLOR.BLUE};
      img {
        width: 156px;
      }
    }
    &.benefit-3 img {
      width: 206px;
    }
    &.benefit-4 img {
      width: 198px;
    }
  }

  ${MEDIA_QUERY.mobileL} {
    .name {
      min-height: 106px;
    }
  }

  ${MEDIA_QUERY.mobileXS} {
    &.benefit-1 img {
      width: 180px;
    }
    &.benefit-2 img {
      width: 120px;
    }
    &.benefit-3 img {
      width: 156px;
    }
    &.benefit-4 img {
      width: 160px;
    }
  }
`;
