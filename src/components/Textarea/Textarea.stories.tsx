import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';

import Textarea, { TextareaProps } from './Textarea';
import docs from './docs.mdx';

export default {
  title: 'Components/Input/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const Template: Story<TextareaProps> = ({ value, ...args }) => {
  const [val, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return <Textarea value={val} onChange={e => setValue(e.target.value || '')} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  id: '2',
  name: 'textarea',
  label: 'Your message',
  placeholder: 'Enter your message...',
  required: true,
  error: false,
  success: false,
  disabled: false,
  value: '',
  errorMessage: ''
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = { ...Default.args, hideLabel: true };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const Error = Template.bind({});
Error.args = { ...Default.args, error: true, errorMessage: 'Bitte verfasse eine Nachricht.' };

export const Success = Template.bind({});
Success.args = { ...Default.args, success: true };
