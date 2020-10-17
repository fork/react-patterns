import styled from 'styled-components';
import { variant } from '../../stylesheets';

const StyledIcon = styled.svg<{ size: 'small' | 'large' }>`
  ${variant({
    prop: 'size',
    small: `
      width: 20px;
      height: 20px;
    `,
    large: `
      height: 40px;
      width: 40px;
    `
  })}
`;

export default StyledIcon;
