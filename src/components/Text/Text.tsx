import styled from 'styled-components';

import { color } from '../../stylesheets';
import { Colors } from '../../tokens';

export type TextProps = {
  alignment?: 'center' | 'left' | 'right' | 'justify';
  color?: Colors;
  transform?: 'uppercase' | 'lowercase';
};

const Text = styled.p<TextProps>`
  color: ${props => (props.color ? color(props.color)(props) : 'inherit')};
  text-align: ${props => props.alignment};
  text-transform: ${props => props.transform};
  margin: 0;
`;

export default Text;
