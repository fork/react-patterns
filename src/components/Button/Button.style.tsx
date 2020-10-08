import styled, { css } from 'styled-components';

import { btnReset, space, color, variant } from '../../stylesheets';
import { ButtonProps } from './Button';

export type StyledButtonProps = Pick<ButtonProps, 'variant' | 'size'>;

const StyledButton = styled.button<StyledButtonProps>`
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
      background: ${color('secondary')};
      color: ${color('black')};
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
