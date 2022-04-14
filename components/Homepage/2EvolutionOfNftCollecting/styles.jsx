import styled from 'styled-components';
import { COLOR } from 'util/theme';

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
`;
