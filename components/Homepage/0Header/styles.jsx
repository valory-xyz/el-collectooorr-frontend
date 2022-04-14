import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const btnStyle = {
  borderRadius: '0 20px 20px 0',
  width: '216px',
  height: '42px',
};

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid ${COLOR.GREY_1};
  .column-1 {
    img {
      width: 300px;
    }
  }
`;

export const SubHeaderContainer = styled.div`
  padding: 0.5rem 1rem 0.25rem 1rem;
  font-family: "minecraft";
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid ${COLOR.GREY_1};
`;
