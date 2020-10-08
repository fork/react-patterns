import styled from 'styled-components';
import { color, space } from '../../stylesheets';

const StyledCookieLayer = styled.div<{ isVisible?: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${color('black')};
  color: ${color('white')};
  padding: ${space('l')};
  display: ${props => (props.isVisible ? 'block' : 'none')};

  .cookieLayer__buttons {
    margin-top: ${space('s')};
  }
`;

export default StyledCookieLayer;
