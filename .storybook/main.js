module.exports = {
  stories: [
    '../src/components/**/*.stories.@(jsx|tsx)',
    '../src/templates/**/*.stories.@(jsx|tsx)',
    '../src/tokens/**/*.stories.@(jsx|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport/register',
    'storybook-addon-theme-playground',
    '@storybook/addon-a11y'
  ]
};
