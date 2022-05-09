import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const btnStyle = {
  borderRadius: '0px 20px 20px 0px',
  height: '48px',
  width: '100%',
  fontSize: '18px',
};

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1.5rem 3rem;
  border-radius: 20px;
  border: 1px solid ${COLOR.GREY_1};
  background-color: ${COLOR.BLACK};
  img {
    height: 78px;
  }

  ${MEDIA_QUERY.mobileL} {
    padding: 1rem;
    .header {
      font-size: 32px;
    }
  }
`;

export const SorceryBody = styled.div`
  min-height: 480px;
  border: 1px solid ${COLOR.GREY_1};
  border-radius: 20px;
  background-image: url("/images/5WhatIsThisSorcery/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .info-container {
    width: 660px;
    margin-left: auto;
    background-color: ${COLOR.BLACK};
    border-left: 1px solid ${COLOR.GREY_1};
    border-bottom: 1px solid ${COLOR.GREY_1};
    border-radius: 0 20px;
  }
  .row {
    .column {
      img {
        display: flex;
        margin: 0 auto;
      }
    }
    .column-1 {
      width: 75%;
    }
    .column-2 {
      width: 25%;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .info-container {
      width: 80%;
    }
    .row {
      .column-1 {
        width: 100%;
      }
      .column-2 {
        width: 100%;
      }
    }
  }
`;

export const BodyRowOne = styled.div`
  display: flex;
  align-items: center;
  .column {
    padding: 1.5rem;
  }
  .column-1 {
    .text {
      max-width: 300px;
      line-height: 24px;
      font-size: 20px;
      font-family: "spacegrotesk__semibold";
    }
  }
  .column-2 {
    border-left: 1px solid ${COLOR.GREY_1};
    border-bottom: 1px solid ${COLOR.GREY_1};
    img {
      height: 48px;
    }
  }
  ${MEDIA_QUERY.tablet} {
    border-bottom: 1px solid ${COLOR.GREY_1};
    .column {
      padding: 1rem;
    }
    .column-1 {
      .text {
        font-size: 18px;
      }
    }
  }
`;

export const BodyRowTwo = styled.div`
  display: flex;
  align-items: flex-end;
  .column-1 {
    > div {
      display: flex;
      padding: 1rem 1.5rem;
      border-top: 1px solid ${COLOR.GREY_1};
      border-right: 1px solid ${COLOR.GREY_1};
      &:nth-child(odd) {
        align-items: center;
      }
      span {
        font-family: "minecraft";
        font-size: 24px;
      }
      .desc {
        max-width: 260px;
        margin-left: 2rem;
      }
    }
  }
  .column-2 {
    img {
      height: 112px;
      padding-bottom: 0.5rem;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .column-1 {
      > div {
        flex-direction: column;
        align-items: flex-start !important;
        padding: 1rem;
        border-top: none;
        border-right: none;
        span {
          font-family: "minecraft";
          font-size: 24px;
        }
        .desc {
          margin-left: 0;
        }
      }
    }
  }
`;

export const SorceryFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16rem;
  padding: 1rem 2rem;
  border-radius: 10px 10px 20px 20px;
  border-top: 1px solid ${COLOR.GREY_1};
  background-color: ${COLOR.BLACK};
  background-image: url("/images/5WhatIsThisSorcery/frame-left.png"),
    url("/images/5WhatIsThisSorcery/frame-right.png");
  background-repeat: no-repeat, no-repeat;
  background-position-x: left, right;
  background-position-y: bottom, top;
  background-size: 320px;
  .text {
    font-size: 18px;
    line-height: 24px;
    font-family: "spacegrotesk__medium";
  }
  img.max-arrow {
    width: 112px;
    margin: 0 5rem;
  }
  .btn-container {
    width: 50%;
  }

  ${MEDIA_QUERY.tabletL} {
    flex-direction: column;
    margin-top: 5rem;
    padding: 2rem 1rem;
    align-items: flex-start;
    img.max-arrow {
      display: none;
    }
    .btn-container {
      width: 100%;
      margin-top: 1.5rem;
    }
  }

  ${MEDIA_QUERY.tablet} {
    margin-bottom: 2rem;
    img.max-arrow {
      display: block;
      width: 74px;
      margin: 1rem 0;
      transform: rotate(90deg);
    }
  }
`;
