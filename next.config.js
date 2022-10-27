const withAntdLess = require('next-plugin-antd-less');

module.exports = {
  ...withAntdLess({
    cssLoaderOptions: {
      importLoaders: 1,
    },
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
