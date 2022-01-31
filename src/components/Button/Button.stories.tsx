import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';
import docs from './docs.mdx';

export default {
  title: 'Components/Input/Button',
  component: Button,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  variant: 'tertiary'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Primary Button',
  variant: 'primary',
  icon: 'Expand'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Primary Button',
  variant: 'primary',
  disabled: true
};
