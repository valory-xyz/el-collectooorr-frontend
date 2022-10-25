const withAntdLess = require('next-plugin-antd-less');

module.exports = {
  ...withAntdLess({
    reactStrictMode: true,
    lessVarsFilePathAppendToEndOfContent: false,
    cssLoaderOptions: {},
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return config;
    },
  }),
  publicRuntimeConfig: {},
  compiler: {
    styledComponents: true,
  },
};
