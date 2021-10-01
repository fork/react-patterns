import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#8f8786',
  colorSecondary: '#f23e23',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#b3adac',
  appBorderRadius: 0,

  // Typography
  fontBase: 'Helvetica, Arial, sans-serif',
  fontCode: 'sans-serif',

  // Text colors
  textColor: '#262626',
  textInverseColor: '#f7f3f2',

  // Toolbar default and active colors
  barTextColor: '#262626',
  barSelectedColor: '#f23e23',
  barBg: '#f7f3f2',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#343232',
  inputBorderRadius: 4,

  brandTitle: 'React Patterns',
  brandUrl: 'https://www.fork.de/'
  // brandImage: '/images/logo/Logo.svg'
});
