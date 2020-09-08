import styled from 'styled-components';

import { color } from '../../stylesheets';

const Text = styled.p`
  color: ${props => (props.color ? color(props.color)(props) : 'inherit')};
  text-align: ${props => props.alignment};
  text-transform: ${props => props.transform};
  margin: 0;
`;

export default Text;
