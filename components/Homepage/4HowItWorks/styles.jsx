import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const Container = styled.div`
  border-radius: 20px;
  border: 1px solid ${COLOR.GREY_1};
  background-image: url("/images/4HowItWorks/background.png");
  background-size: 100%;
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid ${COLOR.GREY_1};
  }
  .how-it-works-row {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const EachDiv = styled.div`
  flex: 0 0 33.333333%;
  padding: 2rem 2rem 4rem 4rem;
  .row-1 {
    font-size: 38px;
    font-family: "minecraft";
    margin-bottom: 0.5rem;
  }
  .row-2 {
    display: flex;
    align-items: center;
    height: 125px;
    .image-container {
      width: 52%;
      img {
        height: 112px;
      }
    }
    .desc {
      width: 40%;
      line-height: normal;
    }
  }
  &.how-it-works-2 {
    .row-2 img {
      height: 96px;
    }
  }
  &.how-it-works-3 {
    .row-2 img {
      height: 92px;
    }
  }
  &.how-it-works {
    &-2 {
      border-right: 1px solid ${COLOR.GREY_1};
      border-left: 1px solid ${COLOR.GREY_1};
    }
    &-4,
    &-5,
    &-6 {
      border-top: 1px solid ${COLOR.GREY_1};
    }
    &-5 {
      border-right: 1px solid ${COLOR.GREY_1};
      border-left: 1px solid ${COLOR.GREY_1};
    }
  }
`;
