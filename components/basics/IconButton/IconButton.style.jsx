import styled, { css } from 'styled-components';

import { color } from '../../../stylesheets';

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
  color: ${color('white')};
  background: ${color('primary')};
  width: 30px;
  height: 30px;

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  ${props =>
    props.size === 'large' &&
    css`
      width: 50px;
      height: 50px;
    `}

  ${props =>
    props.variant === 'secondary' &&
    css`
      color: ${color('white')};
      background: ${color('secondary')};
    `}
`;

export default StyledIconButton;
