/* eslint-disable no-irregular-whitespace */
import React from 'react';
import styled from 'styled-components';

import { space } from '../../stylesheets';

export default {
  title: 'Tokens/Spacings'
};

const getSpacing = (usePx = false) => props => space(props.size, usePx)(props);

const Spacing = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  height: ${getSpacing()};
  background: #00ffff;
  margin-bottom: ${space('xl')};
  margin-top: ${space('l')};

  &:before {
    position: absolute;
    top: -${space('l')};
    content: '${props => props.size} | ${getSpacing(true)}px | ${getSpacing()} ';
  }
`;

export const Story = () => (
  <>
    <Spacing size="xs" />
    <Spacing size="s" />
    <Spacing size="m" />
    <Spacing size="l" />
    <Spacing size="xl" />
  </>
);
