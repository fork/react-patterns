import styled from 'styled-components';

import { space, mq } from '../../stylesheets';

const StyledTeaser = styled.a`
  display: block;
  margin-bottom: ${space('m')};
  text-decoration: none;

  [data-whatintent='mouse'] &,
  [data-whatintent='touch'] & {
    outline: 0;
  }

  img {
    height: auto;
    width: 100%;
  }

  p,
  h2 {
    display: block;
    margin-bottom: ${space('s')};
    margin-top: 0;

    ${mq('s')} {
      padding: 0 ${space('s')};
    }
  }
`;

export default StyledTeaser;
