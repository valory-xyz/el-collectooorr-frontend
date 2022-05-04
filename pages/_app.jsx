import App from 'next/app';
import Head from 'next/head';
import { createWrapper } from 'next-redux-wrapper';
import PropTypes from 'prop-types';

import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';

import GlobalStyle from 'components/GlobalStyles';
import Layout from 'components/Layout';
import MetamaskProvider from 'components/Login/Helpers/MetamaskProvider';
import initStore from '../store';

require('../styles/antd.less');

const getLibrary = (provider) => new Web3(provider);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>El Collectooorr</title>
          <meta
            name="description"
            content="Deposit ETH and El Collectooorr intelligently waits for and collects Art Blocks drops on your behalf."
          />
        </Head>
        <Web3ReactProvider getLibrary={getLibrary}>
          <MetamaskProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MetamaskProvider>
        </Web3ReactProvider>
        <GlobalStyle />
      </>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})])
    .isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

const wrapper = createWrapper(initStore);
export default wrapper.withRedux(MyApp);
