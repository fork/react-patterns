import React, { ReactNode } from 'react';
import styled, { ThemeProvider as BaseThemeProvider } from 'styled-components';

import { Tokens } from '../tokens';
import { colorsToCSSVariables, objectToCSSVariables } from './tools/css-variables';

type ThemeProviderProps = {
  children: ReactNode;
  tokens: Tokens;
  className?: string;
};

const StyledThemeProvider = styled.div`
  /* General object to css variables transformation */
  ${({ theme }) => objectToCSSVariables('spacings', theme.spacings)}
  ${({ theme }) => objectToCSSVariables('font-families', theme.fontFamilies)}

    /* Special mixin to avoid color default value as css variable */
    ${({ theme }) => colorsToCSSVariables(theme.colors)}
`;

const ThemeProvider = ({ children, tokens, className }: ThemeProviderProps) => (
  <BaseThemeProvider theme={tokens}>
    <StyledThemeProvider className={className}>{children}</StyledThemeProvider>
  </BaseThemeProvider>
);

ThemeProvider.defaultProps = {
  className: undefined
};

export default ThemeProvider;
