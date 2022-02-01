import { ReactNode } from 'react';
import styled from 'styled-components';

import { typography } from '../../stylesheets';
import { Typography } from '../../tokens';

export type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'figure' | 'div' | 'cite';
  variant?: Typography;
  children: ReactNode;
};

const Text = styled.p<TextProps>`
  color: inherit;
  margin: 0;

  ${props => typography(props.variant || 'copy')(props)}
`;

export default Text;
