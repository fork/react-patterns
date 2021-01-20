import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';

import 'lazysizes';
import 'picturefill';

import tokens from '../src/tokens';
import GlobalStyle from '../src/stylesheets/global';

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  themePlayground: {
    theme: tokens,
    provider: ThemeProvider,
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
