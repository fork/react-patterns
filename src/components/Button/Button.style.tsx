import styled, { css } from 'styled-components';

import { btnReset, space, color, variant } from '../../stylesheets';
import { ButtonProps } from './Button';

export type StyledButtonProps = Pick<ButtonProps, 'variant' | 'size' | 'iconPosition'>;

const StyledButton = styled.button<StyledButtonProps>`
  ${btnReset()}
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  border-radius: ${space('xxs')};

  /* variant Prop */
  ${variant({
    primary: css`
      background: ${color('primary')};
      color: ${color('neutral', 10)};

      &:hover {
        background: ${color('primary', 60)};
      }

      &:active {
        background: ${color('primary', 90)};
      }
    `,
    secondary: css`
      background: ${color('neutral', 20)};
      color: ${color('neutral', 100)};

      &:hover {
        background: ${color('neutral', 30)};
      }

      &:active {
        background: ${color('neutral', 50)};
      }
    `
  })}

  /* size Prop */
    ${variant({
    prop: 'size',
    small: css`
      padding: ${space('s')} ${space('m')};
    `,
    large: css`
      padding: ${space('m')} ${space('l')};
    `
  })};

  /* iconPosition Prop */
  ${variant({
    prop: 'iconPosition',
    after: css`
      flex-direction: row-reverse;
    `,
    only: css`
      border-radius: 999px;
      padding: ${space('s')};
    `
  })};
`;

export default StyledButton;
