import styled from 'styled-components';

import { getGridSpans } from '../../../stylesheets';

const StyledQuote = styled.blockquote`
  margin: 0;
  ${getGridSpans('width', { s: 2, m: 4, l: 12 })};

  cite {
    display: block;
  }
`;

export default StyledQuote;
