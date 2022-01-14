import styled from 'styled-components';

import { Accordion } from 'react-accessible-accordion';
import { color, space } from '../../stylesheets';

const StyledAccordion = styled(Accordion)`
  .accordion__button {
    padding: ${space('s')} 0;
    border-bottom: 1px solid ${color('neutral')};
  }

  .accordion__panel {
    padding: ${space('s')} 0;
  }
`;

export default StyledAccordion;
