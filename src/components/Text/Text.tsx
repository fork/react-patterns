import { ReactNode } from 'react';
import styled from 'styled-components';

import { color, typography } from '../../stylesheets';
import { Colors, Typography } from '../../tokens';

export type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'figure' | 'div' | 'cite';
  variant?: Typography;
  color?: Colors;
  children: ReactNode;
};

const Text = styled.p<TextProps>`
  color: ${props => (props.color ? color(props.color)(props) : 'inherit')};
  margin: 0;

  ${props => typography(props.variant || 'copy')(props)}
`;

export default Text;
