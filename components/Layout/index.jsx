import { Layout } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from '../Homepage/0Header';
import Footer from '../Homepage/6Footer';
import { CustomLayout } from './styles';

const { Header, Content } = Layout;

const NavigationBar = ({ children }) => {
  const router = useRouter();

  return (
    <CustomLayout pathname={router.pathname}>
      <Header>
        <HeaderComponent />
      </Header>

      <Content className="site-layout">{children}</Content>

      <Footer />
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
