import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';

import { space, color } from '../../stylesheets';

import ScrollContainer, { ScrollContainerProps } from './ScrollContainer';
import docs from './docs.mdx';
import Text from '../Text';
import Button from '../Button';

export default {
  title: 'Components/Layout/ScrollContainer',
  component: ScrollContainer,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const Container = styled.div`
  width: 80vw;
  max-width: 300px;
  min-height: 300px;
  padding: ${space('l')};
  border: 2px solid ${color('neutral', 100)};
`;

const Template: Story<ScrollContainerProps> = args => <ScrollContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: Array.from(Array(20).keys()).map(i => (
    <Container>
      <Text>
        Vel velit consequatur neque et eaque. Voluptate cumque laudantium quo officia amet
        inventore. Quisquam molestiae qui sint ea nemo odit. Odit ex assumenda distinctio.
      </Text>

      {i % 2 ? (
        <Text>
          Vel velit consequatur neque et eaque. Voluptate cumque laudantium quo officia amet
          inventore. Quisquam molestiae qui sint ea nemo odit. Odit ex assumenda distinctio.
        </Text>
      ) : null}
    </Container>
  ))
};
