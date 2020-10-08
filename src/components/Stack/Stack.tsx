import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { space } from '../../stylesheets';
import { Spacings } from '../../tokens';

import Flex, { FlexProps } from '../Flex';

export type StackProps = {
  gap?: Spacings;
  className?: string;
  children: ReactNode;
} & Pick<FlexProps, 'alignItems' | 'justifyContent'>;

const StyledStack = styled(Flex)<{ gap?: Spacings }>`
  > * + * {
    margin-top: ${props => (props.gap ? space(props.gap) : undefined)} !important;
  }
`;

const Stack = ({ alignItems, children, gap, justifyContent, className }: StackProps) => {
  return (
    <StyledStack
      alignItems={alignItems}
      direction="column"
      justifyContent={justifyContent}
      gap={gap}
      className={className}
    >
      {children}
    </StyledStack>
  );
};

export default Stack;
