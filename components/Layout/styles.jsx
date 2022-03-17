import styled from 'styled-components';
import { Layout } from 'antd';

export const CustomLayout = styled(Layout)`
  .ant-layout-header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    width: 100%;
  }
  .site-layout {
    padding: 0 50px;
    margin-top: 64px;
  }
  .site-layout-background {
    padding: 24px 0;
    min-height: calc(100vh - 134px);
  }
  .ant-layout-footer {
    text-align: center;
  }
`;

export const Logo = styled.div`
  width: 180px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-right: 3.5rem;
  .title-logo {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/autonolas-logo.png");
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 50px;
`;
