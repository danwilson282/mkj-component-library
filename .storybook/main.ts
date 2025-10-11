import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-jest",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
    async viteFinal(config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        // force Vite to use CommonJS version of upath
        // upath: 'upath/index.cjs',
        // optional: polyfill 'path' if used by upath
        path: require.resolve('path-browserify'),
      },
    };
    return config;
  },
};
// module.exports = config;
export default config;