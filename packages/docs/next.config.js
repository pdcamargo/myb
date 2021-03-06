const {
  addPathsToNextWebpackConfig,
} = require('@mybrief/core');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack(config) {
    addPathsToNextWebpackConfig(config);

    return config;
  },
});
