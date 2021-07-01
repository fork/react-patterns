import { Story, Meta } from '@storybook/react';
import React from 'react';

import Icon, { IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = { icon: 'AngleDown', size: 'small' };
