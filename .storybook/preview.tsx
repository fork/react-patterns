import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import 'lazysizes';
import 'picturefill';

import { tokens } from '../src/tokens';

import { ThemeProvider } from '../src/stylesheets';
import GlobalStyle from '../src/stylesheets/global';

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  themePlayground: {
    theme: [
      { name: 'Default Theme', theme: tokens.default },
      { name: 'Inverted Theme', theme: tokens.inverted }
    ],
    provider: ({ theme, children }) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    ),
    controls: { breakpoints: { hidden: true } }
  }
};
