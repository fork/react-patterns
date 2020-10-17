module.exports = {
  stories: ['../components/**/*.stories.(jsx|tsx)', '../templates/**/*.stories.(jsx|tsx)', '../tokens/**/*.stories.(jsx|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y',
    'storybook-addon-theme-playground/dist/register'
  ]
};
