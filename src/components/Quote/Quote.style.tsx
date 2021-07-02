import styled from 'styled-components';

import { gridContainer, getGrid, mq } from '../../stylesheets';

const StyledQuote = styled.blockquote`
  ${gridContainer};
  ${getGrid()};

  > * {
    grid-column: 1 / span 4;

    ${mq('m')} {
      grid-column: 1 / span 12;
    }
  }

  cite {
    display: block;
  }
`;

export default StyledQuote;
