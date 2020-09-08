import styled, { css } from 'styled-components';

const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;

  ${props =>
    props.size === 'large' &&
    css`
      height: 40px;
      width: 40px;
    `}
`;

export default StyledIcon;
