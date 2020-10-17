import styled from 'styled-components';

import { space, color } from '../../stylesheets';

const StyledTeaser = styled.div`
  max-width: 400px;
  margin: ${space('l')};
  border: 1px solid ${color('black')};

  img {
    display: block;
  }

  p,
  h2 {
    padding: ${space('s')};
  }
`;

export default StyledTeaser;
