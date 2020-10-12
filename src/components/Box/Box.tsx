import styled from 'styled-components';

import { Colors, Spacings } from '../../tokens';
import { color, space } from '../../stylesheets';

export type BoxProps = {
  color?: Colors;
  background?: Colors;
  padding?: Spacings | Spacings[];
  margin?: Spacings | Spacings[];
  borderRadius?: Spacings;
  alignment?: 'left' | 'center' | 'right' | 'justify';
  flexGrow?: number;
};

export const getBackground = (bg: Colors | Colors[]) => {
  if (typeof bg === 'undefined') return undefined;

  if (typeof bg === 'string') {
    return color(bg);
  }

  const colorStops = bg.map(id => color(id)).join(',');

  return `linear-gradient(to bottom, ${colorStops})`;
};

const Box = styled.div<BoxProps>`
  color: ${p => (p.color ? color(p.color) : undefined)};
  background-color: ${({ background }) => (background ? color(background) : undefined)}};
  padding: ${({ padding }) => (padding ? space(padding) : undefined)};
  margin: ${({ margin }) => (margin ? space(margin) : undefined)};
  text-align: ${props => props.alignment};
  border-radius: ${({ borderRadius }) => (borderRadius ? space(borderRadius) : undefined)};
  flex-grow: ${({ flexGrow }) => flexGrow || undefined};
`;

export default Box;
