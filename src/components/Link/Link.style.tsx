import styled from 'styled-components';
import { space } from '../../stylesheets';

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: ${space('xxs')};
  }
`;

export default StyledLink;
