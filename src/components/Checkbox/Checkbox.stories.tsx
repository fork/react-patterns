import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Checkbox, { CheckboxProps } from './Checkbox';
import docs from './docs.mdx';

export default {
  title: 'Components/Input/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const defaultData = {
  label: 'Checkbox a',
  id: 'a',
  required: false,
  checked: false,
  error: false,
  errorMessage: 'Dieses Feld ist verpflichtend',
  hideLabel: false
};

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

const TemplateWithState: Story<CheckboxProps> = args => {
  const [checked, setChecked] = useState(false);
  return <Checkbox {...args} checked={checked} onChange={() => setChecked(prev => !prev)} />;
};

export const Checked = Template.bind({});
Checked.args = { ...defaultData, label: 'Checkbox 1', id: '1', checked: true };

export const Unchecked = Template.bind({});
Unchecked.args = { ...defaultData, label: 'Checkbox 2', id: '2', checked: false };

export const Error = Template.bind({});
Error.args = {
  label: 'Checkbox 3',
  id: '3',
  required: true,
  error: true,
  errorMessage: 'Dieses Feld ist verpflichtend'
};

export const Success = Template.bind({});
Success.args = { ...defaultData, label: 'Checkbox 4', id: '4', checked: true, required: true };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultData, label: 'Checkbox 5', id: '5', disabled: true };

export const WithoutLabel = Template.bind({});
WithoutLabel.args = { ...defaultData, label: 'Checkbox 6', id: '6', hideLabel: true };

export const WithState = TemplateWithState.bind({});
WithState.args = { label: 'Checkbox 7', id: '7', required: true };
