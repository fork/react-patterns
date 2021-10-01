import styled from 'styled-components';

import { space, mq } from '../../stylesheets';

const StyledTeaser = styled.a`
  display: block;
  margin-bottom: ${space('m')};
  text-decoration: none;

  img {
    height: auto;
    width: 100%;
  }

  p,
  h2 {
    margin-bottom: ${space('s')};
    margin-top: 0;

    ${mq('s')} {
      padding-left: 10px;
      padding-right: ${space('s')};
    }
  }
`;

export default StyledTeaser;
