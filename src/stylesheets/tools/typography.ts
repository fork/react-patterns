import { css } from 'styled-components';

import { Tokens, Typography } from '../../tokens';

const typography =
  (key: Typography) =>
  ({ theme }: { theme: Tokens }) => {
    const { typography: typo } = theme;

    if (!typo) {
      throw new Error('Typography is not defined in theme object');
    }

    const obj = typo[key];

    if (!obj) return null;

    return css`
      font-weight: ${obj.weight};
      font-family: var(--font-families-${obj.family || 'default'});
      font-size: var(--typography-${key}-font-size);
      ${obj.lineHeights ? `line-height: var(--typography-${key}-line-height)` : ''};
      ${obj.letterSpacings ? `letter-spacing: var(--typography-${key}-letter-spacing)` : ''};
    `;
  };

export default typography;
