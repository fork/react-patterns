import { Tokens } from '.';

export const baseTokens: Omit<Tokens, 'colors'> = {
  breakpoints: {
    s: 580,
    m: 960,
    l: 1340
  },
  maxwidth: 1680,
  fontFamilies: {
    default: '"IBM Plex Mono", monospace',
    serif: '"IBM Plex Mono", serif'
  },
  typography: {
    headline1: {
      fontSizes: [29, 81],
      lineHeights: [1, 1],
      weight: 'bold'
    },
    headline2: {
      fontSizes: [24, 54],
      lineHeights: [1, 1],
      weight: 'bold'
    },
    headline3: {
      fontSizes: [20, 36],
      lineHeights: [1.1, 1.1],
      weight: 'bold'
    },
    headline4: {
      fontSizes: [17, 24],
      lineHeights: [1.33, 1.33],
      weight: 'bold'
    },
    copy: {
      fontSizes: [14, 16],
      lineHeights: [1.5, 1.5]
    },
    copySmall: {
      fontSizes: [12, 14],
      lineHeights: [1.5, 1.5]
    },
    quote: {
      fontSizes: [24, 54],
      lineHeights: [1, 1]
    },
    link: {
      fontSizes: [14, 16],
      lineHeights: [1, 1]
    },
    button: {
      fontSizes: [14, 16],
      lineHeights: [1.5, 1.5],
      weight: 'bold'
    },
    formLabel: {
      fontSizes: [12, 14],
      lineHeights: [1, 1],
      weight: 'bold'
    },
    formValue: {
      fontSizes: [12, 14],
      lineHeights: [1, 1]
    },
    formHint: {
      fontSizes: [10, 12],
      lineHeights: [1, 1]
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
    m: 24,
    l: 36,
    xl: 48,
    xxl: 60
  }
};

const defaultTokens: Tokens = {
  ...baseTokens,
  colors: {
    neutral: {
      default: '90',
      '10': '#ffffff',
      '30': '#eeeeee',
      '50': '#888888',
      '70': '#4d4d4d',
      '90': '#000000'
    },
    primary: {
      default: '50',
      '50': '#f23e23',
      '70': '#a91f0a',
      '90': '#78020c'
    },
    accent1: {
      default: '50',
      '50': '#069cc1'
    },
    warning: {
      default: '50',
      '50': '#ff0000'
    },
    notification: {
      default: '50',
      '50': '#ffe200'
    },
    success: {
      default: '50',
      '50': '#00b30d'
    },
    interaction: {
      default: '50',
      '50': '#2400fe'
    }
  }
};

const invertedTokens: Tokens = {
  ...baseTokens,
  colors: {
    ...defaultTokens.colors,
    neutral: {
      default: '90',
      '10': '#000000',
      '30': '#4d4d4d',
      '50': '#888888',
      '70': '#eeeeee',
      '90': '#ffffff'
    }
  }
};

export default {
  default: defaultTokens,
  inverted: invertedTokens
};
