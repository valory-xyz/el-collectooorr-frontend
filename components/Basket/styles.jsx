import styled from 'styled-components';

export const BasketContainer = styled.div`
  .ant-card {
    max-width: 260px;
    width: 100%;
    margin-bottom: 2rem;
    margin-right: 2rem;

    img,
    iframe {
      width: 100%;
      border: 0;
      padding: 0;
    }
    .ant-card-meta {
      margin: 1rem 0;
    }
    .ant-typography {
      font-size: 14px;
    }
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;
