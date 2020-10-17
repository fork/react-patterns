import styled from 'styled-components';
import { space } from '../../stylesheets';

const StyledSharing = styled.div`
  display: flex;
  margin: ${space('m')};
  align-items: center;

  .sharing__item,
  p {
    margin-right: ${space('s')};
  }
`;

export default StyledSharing;
