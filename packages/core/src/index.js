const path = require('path');

const aliasPathsToResolve = [
  {
    name: '@mybrief/design-system',
    path: path.resolve(
      __dirname,
      '../../design-system/src',
    ),
  },
  {
    name: '@mybrief/components',
    path: path.resolve(__dirname, '../../components/src'),
  },
];

const addPathsToNextWebpackConfig = (config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      aliasPathsToResolve.map(
        (aliasPath) => aliasPath.path,
      ),
    ],
    use: ['ts-loader'],
  });

  /** Resolve aliases */
  aliasPathsToResolve.forEach((mod) => {
    config.resolve.alias[mod.name] = mod.path;
  });

  return config;
};

module.exports = {
  addPathsToNextWebpackConfig,
};
