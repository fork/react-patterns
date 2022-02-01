import styled from 'styled-components';

import { gridContainer, getGrid, mq, space } from '../../stylesheets';

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
    font-style: normal;
    display: block;
  }

  p {
    font-style: italic;
    padding-bottom: ${space('xs')};
  }
`;

export default StyledQuote;
