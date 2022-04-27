import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const Container = styled.div`
  button {
    width: auto;
    height: auto;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .ant-typography {
    margin: 0;
    max-width: 180px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const MetamaskContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  .dash {
    margin: 0 0.75rem;
    width: 1px;
    height: 2.25rem;
    background-color: ${COLOR.PRIMARY};
  }
  .address {
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ant-btn {
    margin-left: 0.75rem;
  }

  ${MEDIA_QUERY.tabletL} {
    flex-direction: column;
    align-items: flex-start;
    > div {
      line-height: 1.5;
      &.dash {
        display: none;
      }
    }
  }
`;
