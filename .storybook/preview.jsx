import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';

import 'lazysizes';
import 'picturefill';

import tokens from '../tokens';
import GlobalStyle from '../stylesheets/global';

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

export const decorators = [
  storyFn => (
    <ThemeProvider theme={tokens}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  )
];
