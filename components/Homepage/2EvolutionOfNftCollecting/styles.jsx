import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const Container = styled.div`
  min-height: 480px;
  padding: 1rem 3rem 1.5rem 0;
  margin-bottom: 2rem;
  border-radius: 20px;
  border: 1px solid ${COLOR.RED};
  background-image: url("/images/2EvolutionOfNftCollecting/background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 24px;
  background-origin: content-box;
  background-color: ${COLOR.BLACK};

  ${MEDIA_QUERY.laptop} {
    background-size: 70%;
    background-position-y: 48px;
  }

  ${MEDIA_QUERY.tabletL} {
    background-size: 80%;
    background-position-y: 106px;
  }

  ${MEDIA_QUERY.tablet} {
    background-size: 97.5%;
    padding-right: 0.5rem;
    background-position-y: 276px;
  }
`;

export const CollectionContainer = styled.div`
  width: 660px;
  padding: 0 0 0 0.75rem;
  border-radius: 20px 0;
  .header-column {
    .header {
      line-height: 64px;
    }
    img {
      margin: 1rem 0 1.5rem 0;
    }
    .text {
      max-width: 320px;
      line-height: 20px;
      font-size: 16px;
    }
  }

  ${MEDIA_QUERY.tablet} {
    width: auto;
    .header-column {
      .header {
        line-height: 48px;
      }
      img {
        margin-bottom: 9rem;
      }
      .text {
        max-width: 264px;
      }
    }
  }
`;
