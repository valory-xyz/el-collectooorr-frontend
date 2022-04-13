import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const Container = styled.div`
  border: 1px solid ${COLOR.WHITE};
  border-radius: 16px;

  .how-it-works-row {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const EachDiv = styled.div`
  flex: 0 0 33.333333%;
  padding: 2rem 4rem 4rem 4rem;
  .row-1 {
    font-size: 34px;
    font-family: "minecraft";
    margin-bottom: 0.5rem;
  }
  .row-2 {
    display: flex;
    align-items: center;
    img {
      width: 112px;
      margin-right: 3rem;
    }
    .desc {
      max-width: 154px;
      line-height: normal;
    }
  }
  &.how-it-works {
    &-2 {
      border-right: 1px solid ${COLOR.WHITE};
      border-left: 1px solid ${COLOR.WHITE};
    }
    &-4,
    &-5,
    &-6 {
      border-top: 1px solid ${COLOR.WHITE};
    }
    &-5 {
      border-right: 1px solid ${COLOR.WHITE};
      border-left: 1px solid ${COLOR.WHITE};
    }
  }
`;
