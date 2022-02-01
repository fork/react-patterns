type TypographyToken = {
  fontSizes: number[];
  lineHeights?: number[];
  letterSpacings?: number[];
  family?: FontFamilies;
  weight?: string;
};

type ColorToken = {
  default: string;
  [key: string]: string;
};

export type Tokens = {
  maxwidth: number;
  breakpoints: { s: number; m: number; l: number };
  fontFamilies: {
    default: string;
    serif: string;
  };
  typography: {
    'headline-1': TypographyToken;
    'headline-2': TypographyToken;
    'headline-3': TypographyToken;
    'headline-4': TypographyToken;
    copy: TypographyToken;
    'copy-small': TypographyToken;
    quote: TypographyToken;
    link: TypographyToken;
    button: TypographyToken;
    'form-label': TypographyToken;
    'form-value': TypographyToken;
    'form-hint': TypographyToken;
  };
  colors: {
    neutral: ColorToken;
    primary: ColorToken;
    accent1: ColorToken;
    warning: ColorToken;
    success: ColorToken;
    notification: ColorToken;
    interaction: ColorToken;
  };
  grid: {
    default: {
      columns: number;
      columnGap: number;
    };
    s: {
      columns: number;
      columnGap: number;
    };
    m: {
      columns: number;
      columnGap: number;
    };
    l: {
      columns: number;
      columnGap: number;
    };
  };
  spacings: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
};

export type Colors = keyof Tokens['colors'];
export type Spacings = keyof Tokens['spacings'];
export type Breakpoints = keyof Tokens['breakpoints'];
export type Typography = keyof Tokens['typography'];
export type FontFamilies = keyof Tokens['fontFamilies'];

export { default as tokens, baseTokens } from './tokens';
