import styled from 'styled-components';
import { space } from '../../stylesheets';
import Input from '../Input';

const StyledPassword = styled(Input)`
  input {
    padding-right: 50px;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${space('xxs')};
  }
`;

export default StyledPassword;
