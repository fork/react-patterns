import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';
import docs from './docs.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: docs
    }
  }
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

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary'
};
