import React, { ReactNode } from 'react';
import styled, { ThemeProvider as BaseThemeProvider } from 'styled-components';

import { tokens, Tokens } from '../tokens';

import { colorsToCSSVariables, objectToCSSVariables } from './tools/css-variables';

type ThemeKey = keyof typeof tokens;

type ThemeProviderProps = {
  children: ReactNode;
  theme?: ThemeKey | Tokens;
  className?: string;
};

const StyledThemeProvider = styled.div`
  /* General object to css variables transformation */
  ${({ theme }) => objectToCSSVariables('spacings', theme.spacings)}
  ${({ theme }) => objectToCSSVariables('font-families', theme.fontFamilies)}

    /* Special mixin to avoid color default value as css variable */
    ${({ theme }) => colorsToCSSVariables(theme.colors)}
`;

const ThemeProvider = ({ children, theme = 'default', className }: ThemeProviderProps) => (
  <BaseThemeProvider theme={typeof theme !== 'string' ? theme : tokens[theme]}>
    <StyledThemeProvider className={className}>{children}</StyledThemeProvider>
  </BaseThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: 'default',
  className: undefined
};

export default ThemeProvider;
