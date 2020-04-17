import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from '../../stylesheets/theme';

function renderWithTheme(component) {
  return renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}

export default renderWithTheme;
