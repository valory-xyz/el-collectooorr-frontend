import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { URL } from 'util/constants';
import HeaderComponent from '../Homepage/0Header';
import { CustomLayout } from './styles';

const { Header, Content } = Layout;

const NavigationBar = ({ children }) => {
  const router = useRouter();
  const ishomepage = router.pathname === URL.ROOT;

  return (
    <CustomLayout ishomepage={ishomepage}>
      <Header>
        <HeaderComponent />
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
