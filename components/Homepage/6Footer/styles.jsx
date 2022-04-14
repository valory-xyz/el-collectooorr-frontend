import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const Container = styled.div`
  margin-top: 4rem;
  font-size: 20px;
  font-family: "spacegrotesk__regular";
  .footer-logo-container {
    margin-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .built-by {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const SubFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding: 3rem 1rem;
  border: 1px solid ${COLOR.GREY_1};
  border-radius: 0px 0px 20px 20px;
  border-top-color: transparent;
  .sub-footer-text {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    text-align: right;
  }
`;
