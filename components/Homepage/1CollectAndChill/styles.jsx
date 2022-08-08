import styled from 'styled-components';
import { CustomButton } from 'common-util/Button';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const btnStyle = {
  borderRadius: '0 0 20px 0',
  height: '60px',
  width: '100%',
  fontSize: '26px',
};

export const Container = styled.div`
  min-height: 880px;
  margin-bottom: 2rem;
  border-radius: 20px;
  border: 1px solid ${COLOR.GREY_1};
  background-image: url("/images/1CollectAndChill/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 70%;
  background-position-x: 50%;

  ${MEDIA_QUERY.desktop} {
    min-height: 580px;
    background-position-y: 0%;
    background-position-x: 0%;
  }

  ${MEDIA_QUERY.laptop} {
    min-height: 580px;
    background-position-y: 0%;
    background-position-x: 0%;
  }

  ${MEDIA_QUERY.tabletL} {
    position: relative;
    min-height: 648px;
    border-radius: 20px 20px 0 0;
    background-size: 200%;
    background-position-x: 60%;
  }

  ${MEDIA_QUERY.tablet} {
    min-height: 736px;
  }
`;

export const CollectAndChillContainer = styled.div`
  width: 660px;
  padding: 0 0 0 0.75rem;
  border-radius: 20px 0;
  background-color: ${COLOR.BLACK};
  border-right: 1px solid ${COLOR.GREY_1};
  border-bottom: 1px solid ${COLOR.GREY_1};
  .header-row {
    img {
      margin-top: -1rem;
    }
  }
  .collect-chill-body {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: -1rem;
    .column-1 {
      width: 32.5%;
      padding-bottom: 1.5rem;
      font-size: 17px;
      line-height: normal;
      .text {
        margin-bottom: 0.25rem;
      }
    }
    .column-2 {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 57.5%;
      img {
        width: 132px;
        margin: 0 1.5rem 1.5rem;
      }
    }
  }

  ${MEDIA_QUERY.tabletL} {
    position: absolute;
    bottom: 0;
    width: auto;
    padding: 1rem 0.75rem;
    border-bottom: none;
    border-top: 1px solid ${COLOR.GREY_1};
    border-radius: 20px 20px 0 0;
    .collect-chill-body {
      flex-direction: column;
      align-items: center;
      margin-top: 0rem;
      .column-mobile {
        display: flex;
        margin-left: auto;
        img {
          width: 130px;
          padding: 1rem 0;
        }
      }
      .column-1 {
        width: auto;
        padding-bottom: 1rem;
      }
      .column-2 {
        width: 100%;
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    border-right: none;
    .collect-chill-body {
      .column-2 {
        img {
          display: none;
        }
      }
    }
  }
`;

export const RedButton = styled(CustomButton)`
  border-radius: 0 20px 0 0;
  width: 100%;
`;
