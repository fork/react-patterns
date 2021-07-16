import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { gridContainer, getGrid } from '../../stylesheets';

export default {
  title: 'Tokens/Grid'
};

const GridContainer = styled.div`
  ${gridContainer};
  ${getGrid()};
`;

const GridColumn = styled.span`
  grid-column: span 1;
  background: #7aa0cc;
  height: 100vh;
`;

const Template: Story = args => (
  <GridContainer {...args}>
    {[...Array(12)].map((_e, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <GridColumn key={i} />
    ))}
  </GridContainer>
);

export const Default = Template.bind({});
Default.args = {};
