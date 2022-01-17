const rootMain = require('../../../../.storybook/main');
const path = require('path');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed
    // unable to resolve typescript files outside of the storybook directory unless you
    // specify the ts-loader should be used on outside files. this maps to the relative location of the project root
    // which allows us to access the _content/_props/index.ts file and transpile it to .js
    config.module.rules.push({
      test: /\.tsx?$/,
      use: 'ts-loader',
      include: path.resolve(__dirname, '../../../../'),
    });

    return config;
  },
};
