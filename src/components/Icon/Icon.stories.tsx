import { Story, Meta } from '@storybook/react';
import React from 'react';

import Icon, { IconProps } from './Icon';
import docs from './docs.mdx';

export default {
  title: 'Tokens/Icon',
  component: Icon,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = { icon: 'AngleDown', size: 'small' };
