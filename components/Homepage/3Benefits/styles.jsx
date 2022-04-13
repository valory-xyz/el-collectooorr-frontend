import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const Container = styled.div`
  border: 1px solid ${COLOR.BLUE};
  border-radius: 20px;
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
`;

export const EachBenefit = styled.div`
  max-width: 25%;
  padding: 1rem;
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    height: 180px;
    img {
      width: 120px;
    }
  }
  .name {
    margin-bottom: 3rem;
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
`;
