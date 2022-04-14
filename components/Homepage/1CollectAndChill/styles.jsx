import styled from 'styled-components';
import { COLOR } from 'util/theme';
import { CustomButton } from 'common-util/Button';

export const btnStyle = {
  borderRadius: '0 0 20px 0',
  height: '60px',
  width: '100%',
  fontSize: '26px',
};

export const Container = styled.div`
  min-height: 580px;
  border-radius: 20px;
  border: 1px solid ${COLOR.GREY_1};
  background-image: url("/images/1CollectAndChill/background.png");
  background-size: 100%;
  margin-bottom: 2rem;
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
`;

export const RedButton = styled(CustomButton)`
  border-radius: 0 20px 0 0;
  width: 100%;
`;
