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
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
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
    primary: '#00ffff',
    secondary: '#80ff00',
    positive: '#009900',
    critical: '#ff0000'
  },
  grid: {
    columns: 12,
    gutters: 0
  },
  spacings: {
    xs: 5,
    s: 10,
    m: 15,
    l: 20,
    xl: 25
  }
};

export default tokens;
