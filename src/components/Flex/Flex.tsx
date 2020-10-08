import styled from 'styled-components';

import Box, { BoxProps } from '../Box';

export type FlexProps = {
  as?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline';
  inline?: boolean;
} & BoxProps;

const Flex = styled(Box)<FlexProps>`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  flex-wrap: ${props => props.wrap};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
`;

export default Flex;
