export type Colors = keyof typeof tokens.colors;
export type Spacings = keyof typeof tokens.spacings;
export type Breakpoints = keyof typeof tokens.breakpoints;

export type Tokens = {
  maxwidth: number;
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
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
  };
};

const tokens: Tokens = {
  maxwidth: 1680,
  breakpoints: {
    s: 580,
    m: 960,
    l: 1340
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
    default: {
      columns: 4,
      columnGap: 12
    },
    s: {
      columns: 4,
      columnGap: 20
    },
    m: {
      columns: 12,
      columnGap: 30
    },
    l: {
      columns: 12,
      columnGap: 40
    }
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
