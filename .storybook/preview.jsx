import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import { withThemePlayground } from 'storybook-addon-theme-playground';

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
  withThemePlayground({
    theme: tokens,
    provider: ThemeProvider
  }),
  storyFn => (
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  )
];
