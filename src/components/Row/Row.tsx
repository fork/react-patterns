import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { space } from '../../stylesheets';
import { Spacings } from '../../tokens';

import Flex, { FlexProps } from '../Flex';

export type RowProps = {
  gap?: Spacings;
  children: ReactNode;
  className?: string;
} & Pick<FlexProps, 'alignItems' | 'justifyContent' | 'wrap'>;

const StyledRow = styled(Flex)<{ gap?: Spacings }>`
  > * + * {
    ${props =>
      props.gap &&
      css`
        margin-left: ${space(props.gap)} !important;
      `}
  }
`;

const Row = ({ alignItems, children, gap, justifyContent, wrap, className }: RowProps) => (
  <StyledRow
    gap={gap}
    className={className}
    alignItems={alignItems}
    justifyContent={justifyContent}
    direction="row"
    wrap={wrap}
  >
    {children}
  </StyledRow>
);

export default Row;
