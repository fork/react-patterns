export type Colors = keyof typeof tokens.colors;
export type Spacings = keyof typeof tokens.spacings;
export type Breakpoints = keyof typeof tokens.breakpoints;

export type Tokens = {
  breakpoints: { s: number; m: number; l: number };
  colors: {
    black: string;
    white: string;
    primary: string;
    secondary: string;
    positive: string;
    critical: string;
  };
  grid: {
    columns: number;
    gutters: number;
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

const tokens: Tokens = {
  breakpoints: {
    s: 375,
    m: 768,
    l: 1024
  },
  colors: {
    black: '#181920',
    white: '#fff',
    primary: '#1E41FF',
    secondary: '#eee',
    positive: '#009900',
    critical: '#ff0000'
  },
  grid: {
    columns: 12,
    gutters: 0
  },
  spacings: {
    xxs: 4,
    xs: 8,
    s: 12,
    m: 20,
    l: 40,
    xl: 60,
    xxl: 80
  }
};

export default tokens;
