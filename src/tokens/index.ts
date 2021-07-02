const tokens: Tokens = {
  maxwidth: 1680,
  breakpoints: {
    s: 580,
    m: 960,
    l: 1340
  },
  fontFamilies: {
    default: 'sans-serif',
    serif: 'serif'
  },
  typography: {
    headline1: {
      fontSizes: [26, 42],
      lineHeights: [1.4, 1.2],
      weight: 'bold'
    },
    headline2: {
      fontSizes: [22, 34],
      lineHeights: [1.3, 1.2],
      weight: 'bold'
    },
    headline3: {
      fontSizes: [20, 24],
      lineHeights: [1.5, 1.5],
      weight: 'bold'
    },
    headline4: {
      fontSizes: [18, 18],
      lineHeights: [1.65, 2],
      weight: 'bold'
    },
    copy: {
      fontSizes: [12, 14]
    },
    copySmall: {
      fontSizes: [12, 14]
    },
    quote: {
      fontSizes: [12, 14],
      family: 'serif'
    },
    link: {
      fontSizes: [12, 14]
    },
    button: {
      fontSizes: [12, 14]
    },
    formLabel: {
      fontSizes: [12, 14]
    },
    formValue: {
      fontSizes: [12, 14]
    },
    formHint: {
      fontSizes: [12, 14]
    }
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
    xxs: 4,
    xs: 8,
    s: 12,
    m: 20,
    l: 40,
    xl: 60,
    xxl: 80
  }
};

export type Colors = keyof typeof tokens.colors;
export type Spacings = keyof typeof tokens.spacings;
export type Breakpoints = keyof typeof tokens.breakpoints;
export type Typography = keyof typeof tokens.typography;
export type FontFamilies = keyof typeof tokens.fontFamilies;

type TypographyToken = {
  fontSizes: number[];
  lineHeights?: number[];
  letterSpacings?: number[];
  family?: FontFamilies;
  weight?: string;
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
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
};

export default tokens;
