import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const ABC = styled.div``;

export const VaultContainer = styled.div`
  .ant-card {
    max-width: 260px;
    width: 100%;
    margin-bottom: 2rem;
    img,
    iframe {
      width: 100%;
      border: 0;
      padding: 0;
    }
    .ant-card-meta {
      margin: 1rem 0;
    }
    .ant-tag {
      color: ${COLOR.BLACK};
    }
    .ant-typography {
      font-size: 14px;
    }
  }
`;
