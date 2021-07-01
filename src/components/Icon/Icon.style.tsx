import styled, { css } from 'styled-components';
import { space, variant } from '../../stylesheets';

const StyledIcon = styled.svg<{ size: 'small' | 'large' }>`
  ${variant({
    prop: 'size',
    small: css`
      width: ${space('m')};
      height: ${space('m')};
    `,
    large: css`
      height: ${space('l')};
      width: ${space('l')};
    `
  })}
`;

export default StyledIcon;
