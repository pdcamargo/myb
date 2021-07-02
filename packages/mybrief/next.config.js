const {
  addPathsToNextWebpackConfig,
} = require('@mybrief/core');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    addPathsToNextWebpackConfig(config);

    return config;
  },
};
