import styled, { css } from 'styled-components';

import { btnReset, space, color, variant } from '../../stylesheets';

const StyledButton = styled.button`
  ${btnReset()}
  display: inline-block;
  font-size: 12px;

  /* Variant Prop */
  ${variant({
    primary: css`
      background: ${color('primary')};
      color: ${color('black')};
    `,
    secondary: css`
      background: ${color('black')};
      color: ${color('white')};
    `
  })}

  /* Size Prop */
  ${variant({
    prop: 'size',
    small: css`
      padding: ${space('s')} ${space('m')};
    `,
    large: css`
      padding: ${space('m')} ${space('l')};
    `
  })}
`;

export default StyledButton;
