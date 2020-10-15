module.exports = {
  stories: ['../components/**/*.stories.jsx', '../templates/**/*.stories.jsx', '../tokens/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y',
    'storybook-addon-theme-playground/dist/register'
  ]
};
