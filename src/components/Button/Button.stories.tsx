import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'small',
  variant: 'primary'
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: 'large',
  variant: 'primary'
};
