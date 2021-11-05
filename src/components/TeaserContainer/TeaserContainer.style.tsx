import styled from 'styled-components';
import { mq, space, gridContainer, getGrid } from '../../stylesheets';

const StyledTeaserContainer = styled.div`
  ${gridContainer};
  ${getGrid()};
  grid-gap: ${space('xs')};

  & > a {
    grid-column: span 2;

    ${mq('m')} {
      grid-column: span 6;
    }

    ${mq('l')} {
      grid-column: span 4;
    }
  }
`;

export default StyledTeaserContainer;
