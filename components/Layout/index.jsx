import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Login from '../Login';
import { CustomLayout, Logo, RightMenu } from './styles';

const { Header, Content } = Layout;

const NavigationBar = ({ children }) => {
  const router = useRouter();

  return (
    <CustomLayout>
      <Header>
        <Logo onClick={() => router.push('/')} data-testid="el-collectooorr-logo">
          <div className="title-logo" />
          El Collectooorr
        </Logo>
        <RightMenu>
          <Login />
        </RightMenu>
      </Header>

      <Content className="site-layout">
        <div className="site-layout-background">{children}</div>
      </Content>
    </CustomLayout>
  );
};

NavigationBar.propTypes = {
  children: PropTypes.element,
};

NavigationBar.defaultProps = {
  children: null,
};

export default NavigationBar;
