const path = require('path');
const babelWebpackConfig = require('@nrwl/react/plugins/babel');
const nrwlConfig = require('@nrwl/react/plugins/webpack');

module.exports = (config, context) => {
  nrwlConfig(config);
  console.log(':::webpack config');
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.ttf$/,
          use: 'file-loader',
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
					include: path.resolve(__dirname, '../../'),
        },
      ],
    },
  };
};
