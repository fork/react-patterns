import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import 'lazysizes';
import 'picturefill';

import { ThemeProvider } from 'styled-components';
import theme from '../stylesheets/theme';
import GlobalStyle from '../stylesheets/global';

addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'React Patterns',
      brandUrl: 'https://fork.de'
    })
  }
});

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
));
