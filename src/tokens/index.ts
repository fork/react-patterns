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
    headline1: TypographyToken;
    headline2: TypographyToken;
    headline3: TypographyToken;
    headline4: TypographyToken;
    copy: TypographyToken;
    copySmall: TypographyToken;
    quote: TypographyToken;
    link: TypographyToken;
    button: TypographyToken;
    formLabel: TypographyToken;
    formValue: TypographyToken;
    formHint: TypographyToken;
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
