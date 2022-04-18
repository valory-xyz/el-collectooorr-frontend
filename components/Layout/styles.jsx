import styled from 'styled-components';
import { Layout } from 'antd';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const CustomLayout = styled(Layout)`
  .ant-layout-header {
    z-index: 99999;
    position: fixed;
    height: 82px;
    width: 100%;
    padding: 0 1rem;
    margin-top: 1rem;
    background-color: ${COLOR.BLACK};
  }
  .site-layout {
    padding: 0 1rem;
    margin-top: 90px;
    background-image: url("/images/background-close-dot.png");
    background-size: 100%;
  }
  .site-layout-background {
    padding: 2rem 0;
    min-height: calc(100vh - 134px);
  }
  .ant-layout-footer {
    text-align: center;
  }
  a {
    text-decoration: underline;
    text-underline-offset: 2px;
    color: ${COLOR.GREEN_2};
    &:hover {
      text-decoration: underline;
    }
  }

  ${MEDIA_QUERY.tablet} {
    .ant-layout-header {
      ${MEDIA_QUERY.tablet} {
        position: relative;
        height: auto;
      }
    }
    .site-layout-background {
      ${MEDIA_QUERY.tablet} {
        padding: 1rem 0;
      }
    }
    .site-layout {
      margin-top: 0;
    }
  }
`;

export const RightMenu = styled.div``;
