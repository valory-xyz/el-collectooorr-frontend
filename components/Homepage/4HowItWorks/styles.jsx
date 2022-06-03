import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const Container = styled.div`
  margin-bottom: 2rem;
  border-radius: 20px;
  border: 1px solid ${COLOR.GREY_1};
  background-image: url("/images/4HowItWorks/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid ${COLOR.GREY_1};
    .header-column-1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        position: relative;
        left: 50%;
      }
    }
  }
  .how-it-works-row {
    display: flex;
    flex-wrap: wrap;
  }

  ${MEDIA_QUERY.tabletL} {
    .header-column-1 {
      flex-direction: column;
      align-items: flex-start;
      img {
        left: -2px !important;
        margin-top: 0.5rem;
      }
    }
  }

  ${MEDIA_QUERY.mobileXS} {
    .header-container {
      .header-column-1 {
        align-items: flex-start;
      }
      .red-image {
        display: none;
      }
    }
  }
`;

export const EachDiv = styled.div`
  flex: 0 0 33.333333%;
  padding: 2rem 2rem 4rem 4rem;
  &.how-it-works {
    .desc {
      width: 40%;
      line-height: normal;
    }
  }
  .row-1 {
    margin-bottom: 0.5rem;
    .name {
      font-size: 38px;
      font-family: "minecraft";
    }
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
      /* border-image: url("/images/4HowItWorks/border-line.png");
      border-image-slice: 36;
      border-image-width: 16px; */
    }
    &-3 {
      /* border-left: 1px solid ${COLOR.GREY_1};
      border-image: url("/images/4HowItWorks/border-line.png");
      border-image-slice: 36;
      border-image-width: 16px; */
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

  ${MEDIA_QUERY.laptop} {
    .image-container {
      img {
        height: 96px !important;
      }
    }
    &.how-it-works-3 {
      .row-2 img {
        height: 70px !important;
      }
    }
  }

  ${MEDIA_QUERY.tabletL} {
    display: flex;
    align-items: center;
    flex: 0 0 50%;
    padding: 1.5rem;
    &.how-it-works {
      .desc {
        width: auto;
      }
      .row-2 img {
        height: auto !important;
        width: 140px;
      }
      &-1,
      &-2,
      &-3 {
        flex-direction: row-reverse;
        .row-1 {
          margin-bottom: 0rem;
          margin-left: 2rem;
        }
      }

      &-3 {
        border-top: 1px solid ${COLOR.GREY_1};
        border-right: 1px solid ${COLOR.GREY_1};
      }
      &-4,
      &-5,
      &-6 {
        flex-direction: row;
        .row-1 {
          margin-bottom: 0rem;
          margin-right: 2rem;
        }
      }
    }
    .row-2 {
      display: block;
      height: auto;
    }
  }

  ${MEDIA_QUERY.tablet} {
    flex: 100%;
    &.how-it-works {
      &-2 {
        border-left: none !important;
        border-right: none !important;
        border-top: 1px solid ${COLOR.GREY_1};
        border-bottom: 1px solid ${COLOR.GREY_1};
      }
    }
  }

  ${MEDIA_QUERY.mobileXS} {
    padding: 1rem;
    &.how-it-works {
      .row-2 img {
        width: 106px;
      }
    }
  }
`;
