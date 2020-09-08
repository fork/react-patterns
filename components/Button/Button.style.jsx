import styled, { css } from 'styled-components';

import { btnReset, space, color } from '../../stylesheets';

const StyledButton = styled.button`
  ${btnReset()}
  display: inline-block;
  font-size: 12px;
  padding: ${space('s')} ${space('m')};
  background: ${color('primary')};
  color: ${color('black')};

  ${props =>
    props.variant === 'secondary' &&
    css`
      background: ${color('black')};
      color: ${color('white')};
    `}

  ${props =>
    props.size === 'large' &&
    css`
      padding: ${space('m')} ${space('l')};
    `}
`;

export default StyledButton;
