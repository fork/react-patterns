import styled, { css } from 'styled-components';

import { color, variant } from '../../stylesheets';

const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 50%;

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  /* Variant Prop */
  ${variant({
    primary: css`
      color: ${color('white')};
      background: ${color('primary')};
    `,
    secondary: css`
      color: ${color('white')};
      background: ${color('secondary')};
    `
  })}

  /* Size Prop */
  ${variant({
    prop: 'size',
    small: css`
      width: 35px;
      height: 35px;
    `,
    large: css`
      width: 50px;
      height: 50px;
    `
  })}
`;

export default StyledIconButton;
