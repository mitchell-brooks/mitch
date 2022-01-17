// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

const path = require('path');
const nrwlConfig = require('@nrwl/react/plugins/webpack');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  webpack: (config, context) => {
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
            include: path.resolve(__dirname, '../../_content'),
          },
        ],
      },
    };
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
