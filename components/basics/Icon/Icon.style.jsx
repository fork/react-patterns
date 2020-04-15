import styled, { css } from 'styled-components';

const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;

  ${props =>
    props.size === 'large' &&
    css`
      height: 50px;
      width: 50px;
    `}
`;

export default StyledIcon;
