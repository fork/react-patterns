import { Tokens } from '.';

export const baseTokens: Omit<Tokens, 'colors'> = {
  breakpoints: {
    s: 580,
    m: 960,
    l: 1340
  },
  maxwidth: 1680,
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
      lineHeights: [1, 1],
      fontSizes: [12, 14]
    },
    copySmall: {
      lineHeights: [1, 1],
      fontSizes: [12, 14]
    },
    quote: {
      fontSizes: [12, 14],
      family: 'serif'
    },
    link: {
      lineHeights: [1, 1],
      fontSizes: [12, 14]
    },
    button: {
      lineHeights: [1, 1],
      fontSizes: [14, 16]
    },
    formLabel: {
      lineHeights: [1, 1],
      fontSizes: [12, 14]
    },
    formValue: {
      lineHeights: [1, 1],
      fontSizes: [12, 14]
    },
    formHint: {
      lineHeights: [1, 1],
      fontSizes: [12, 14]
    }
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

const defaultTokens: Tokens = {
  ...baseTokens,
  colors: {
    neutral: {
      default: '90',
      '10': '#ffffff',
      '20': '#f7f3f2',
      '30': '#b3adac',
      '50': '#8f8786',
      '90': '#343232',
      '100': '#020000'
    },
    primary: {
      default: '50',
      '50': '#f23e23',
      '60': '#a91f0a',
      '90': '#78020c'
    },
    accent1: {
      default: '50',
      '50': '#0000ff'
    },
    warning: {
      default: '50',
      '50': '#ed0b1f'
    },
    success: {
      default: '50',
      '50': '#2dc845'
    },
    notification: {
      default: '50',
      '50': '#ffcc16'
    },
    interaction: {
      default: '50',
      '50': '#069cc1'
    }
  }
};

const invertedTokens: Tokens = {
  ...baseTokens,
  colors: {
    ...defaultTokens.colors,
    neutral: {
      default: '90',
      '10': '#020000',
      '20': '#343232',
      '30': '#8f8786',
      '50': '#b3adac',
      '90': '#f7f3f2',
      '100': '#ffffff'
    }
  }
};

export default {
  default: defaultTokens,
  inverted: invertedTokens
};
