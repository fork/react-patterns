import React, { useEffect, useState } from 'react';
import { Story } from '@storybook/react';

import Radio, { RadioProps } from './Radio';
import docs from './docs.mdx';

export default {
  title: 'Components/Input/Radio',
  component: Radio,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const defaults: RadioProps = {
  id: 'radio-id',
  label: 'What do we eat for lunch?',
  required: true,
  error: false,
  disabled: false,
  hideLabel: false,
  errorMessage: 'We need to eat something. Choose wisely.',
  options: [
    {
      value: 'cao',
      label: '🍲 Cao'
    },
    {
      value: 'polo',
      label: '🏇 Polokantine'
    },
    {
      value: 'ottos',
      label: '🍔 Ottos'
    }
  ]
};

const Template: Story<RadioProps> = ({ value, ...args }) => {
  const [val, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return <Radio value={val} onChange={e => setValue(e.target.value)} {...args} />;
};

export const Default = Template.bind({});
Default.args = defaults;

export const WithValue = Template.bind({});
WithValue.args = { ...defaults, value: 'ottos' };

export const WithoutLabel = Template.bind({});
WithoutLabel.args = { ...defaults, value: 'ottos', hideLabel: true };

export const Success = Template.bind({});
Success.args = { ...defaults, value: 'ottos', success: true };

export const Error = Template.bind({});
Error.args = { ...defaults, error: true };

export const Disabled = Template.bind({});
Disabled.args = { ...defaults, disabled: true };
