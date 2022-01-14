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

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }

  svg {
    color: currentColor;
    fill: currentColor;

    &:not(:only-child) {
      margin-right: space(xxs);
    }
  }

  /* variant Prop */
  ${variant({
    primary: css`
      background: ${color('primary')};
      color: ${color('neutral', 10)};

      &:hover,
      &:focus {
        background: ${color('primary', 60)};
      }

      &:active {
        background: ${color('primary', 90)};
      }
    `,
    secondary: css`
      background: ${color('neutral', 20)};
      color: ${color('neutral')};

      &:hover,
      &:focus {
        background: ${color('neutral', 30)};
      }

      &:active {
        background: ${color('neutral', 50)};
      }
    `,
    tertiary: css`
      background: transparent;
      color: ${color('neutral')};

      &:hover,
      &:focus,
      &:active {
        background: transparent;
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
      padding: ${space('xs')};
    `
  })};
`;

export default StyledButton;
