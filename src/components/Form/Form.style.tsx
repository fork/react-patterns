import styled from 'styled-components';

import { space } from '../../stylesheets';

const StyledForm = styled.form`
  margin: ${space('l')} auto;
  max-width: 800px;
  position: relative;

  & > div > * {
    margin-bottom: ${space('m')};
  }
`;

export default StyledForm;
