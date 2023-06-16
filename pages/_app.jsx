import Head from 'next/head';
import { createWrapper } from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import { WagmiConfig } from 'wagmi';

import { wagmiConfig } from 'common-util/Login/config';

import GlobalStyle from 'components/GlobalStyles';
import Layout from 'components/Layout';
import initStore from '../store';

/* eslint-disable-next-line jest/require-hook */
require('./styles.less');

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>El Collectooorr</title>
      <meta name="title" content="El Collectooorr" />
      <meta
        name="description"
        content="Deposit ETH and El Collectooorr intelligently waits for and collects Art Blocks drops on your behalf."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.elcollectooorr.art/" />
      <meta property="og:title" content="El Collectooorr" />
      <meta
        property="og:description"
        content="Deposit ETH and El Collectooorr intelligently waits for and collects Art Blocks drops on your behalf."
      />
      <meta
        property="og:image"
        content="https://www.elcollectooorr.art/images/1CollectAndChill/metadata-background.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.elcollectooorr.art/" />
      <meta property="twitter:title" content="El Collectooorr" />
      <meta
        property="twitter:description"
        content="Deposit ETH and El Collectooorr intelligently waits for and collects Art Blocks drops on your behalf."
      />
      <meta
        property="twitter:image"
        content="https://www.elcollectooorr.art/images/1CollectAndChill/metadata-background.png"
      />
      <link href="/fonts/stylesheet.css" rel="stylesheet" />
      <link rel="icon" type="images/png" href="/favicon.ico" />
    </Head>
    <WagmiConfig config={wagmiConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
    <GlobalStyle />
  </>
);

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps, store: ctx.store.getState() };
};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})])
    .isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

const wrapper = createWrapper(initStore);
export default wrapper.withRedux(MyApp);
