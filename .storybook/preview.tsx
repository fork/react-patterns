import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import 'lazysizes';
import 'picturefill';

import tokens from '../src/tokens';
import { ThemeProvider } from '../src/stylesheets';
import GlobalStyle from '../src/stylesheets/global';

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  themePlayground: {
    theme: tokens,
    provider: ({ theme, children }) => <ThemeProvider tokens={theme}>{children}</ThemeProvider>,
    controls: { breakpoints: { hidden: true } }
  }
};

export const decorators = [
  storyFn => (
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  )
];
