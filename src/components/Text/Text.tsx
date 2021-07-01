import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { color, variant } from '../../stylesheets';
import { Colors } from '../../tokens';

export type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'figure' | 'div' | 'cite';
  variant?: 'main' | 'sub';
  color?: Colors;
  children: ReactNode;
};

const Text = styled.p<TextProps>`
  color: ${props => (props.color ? color(props.color)(props) : 'inherit')};
  margin: 0;

  ${variant({
    default: 'main',
    main: css`
      font-size: 30px;
    `,
    sub: css`
      font-size: 16px;
    `
  })}
`;

export default Text;
