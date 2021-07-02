import { css } from 'styled-components';

import { Tokens, Typography } from '../../tokens';
import adaptiveSize from './adaptive-size';

const typography =
  (key: Typography) =>
  ({ theme }: { theme: Tokens }) => {
    const { typography: typo, fontFamilies } = theme;

    if (!typo) {
      throw new Error('Typography is not defined in theme object');
    }

    const obj = typo[key];

    if (!obj) return null;

    return css`
      font-weight: ${obj.weight};
      font-family: ${obj.family ? fontFamilies[obj.family] : fontFamilies.default};
      ${adaptiveSize({
        breakpoints: Object.values(theme.breakpoints),
        fontSizes: obj.fontSizes,
        letterSpacings: obj.letterSpacings,
        lineHeights: obj.lineHeights
      })}
    `;
  };

export default typography;
