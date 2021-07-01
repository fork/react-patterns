import styled from 'styled-components';
import { mq, space } from '../../stylesheets';

const StyledTeaserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${space('xs')};

  & > div {
    grid-column: span 2;

    ${mq('m')} {
      grid-column: span 6;
    }

    ${mq('l')} {
      grid-column: span 3;
    }
  }
`;

export default StyledTeaserContainer;
