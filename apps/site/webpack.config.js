module.exports = (config, context) => {
  console.log(':::webpack config');
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.ttf$/,
          type: 'asset/resource',
          generator: {
            filename: './fonts/[name][ext]',
          },
        },
      ],
    },
  };
};
