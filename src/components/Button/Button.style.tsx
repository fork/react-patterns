import styled, { css } from 'styled-components';

import { btnReset, space, color, variant } from '../../stylesheets';
import { ButtonProps } from './Button';

export type StyledButtonProps = Pick<ButtonProps, 'variant' | 'iconPosition'>;

const StyledButton = styled.button<StyledButtonProps>`
  ${btnReset()}
  position: relative;
  display: flex;
  justify-content: center;
  border-style: solid;
  border-width: 2px;
  border-radius: ${space('xxs')};
  padding: ${space('s')} ${space('m')};
  transition: color 200ms, background-color 200ms, border-color 200ms;

  /* [data-whatintent='mouse'] &,
  [data-whatintent='touch'] & {
    outline: 0;
  } */

  &[disabled] {
    pointer-events: none;
    user-select: none;
    color: ${color('neutral', 50)};
  }

  &:focus {
    border-color: ${color('interaction')};
  }

  svg {
    color: currentColor;
    fill: currentColor;

    &:not(:only-child) {
      margin-right: ${space('xs')};
    }
  }

  /* variant Prop */
  ${variant({
    primary: css`
      border-color: ${color('primary')};
      background: ${color('primary')};
      color: ${color('neutral', 10)};

      &:hover {
        background: ${color('primary', 70)};
        border-color: ${color('primary', 70)};
      }

      &:focus {
        background: ${color('primary')};

        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border: 2px solid ${color('neutral', 10)};
        }
      }

      &:active {
        background: ${color('primary', 90)};
        border-color: ${color('primary', 90)};

        &:after {
          display: none;
        }
      }

      &[disabled] {
        background: ${color('neutral', 30)};
        border-color: ${color('neutral', 30)};
      }
    `,
    secondary: css`
      background: ${color('neutral', 10)};
      color: ${color('primary')};
      border-color: ${color('primary')};

      &:hover {
        color: ${color('primary', 70)};
        border-color: ${color('primary', 70)};
      }

      &:active {
        color: ${color('primary', 90)};
        border-color: ${color('primary', 90)};
      }

      &[disabled] {
        border-color: ${color('neutral', 30)};
      }
    `,
    tertiary: css`
      border-color: transparent;
      background: transparent;
      color: ${color('primary')};

      &:hover {
        color: ${color('primary', 70)};
      }

      &:active {
        color: ${color('primary', 90)};
      }
    `
  })}

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
