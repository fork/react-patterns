import React from 'react';

import Select from './Select';

const data = {
  id: '2',
  label: 'Select an option',
  defaultValue: 'option1',
  options: [
    {
      value: 'option1',
      label: 'option 1'
    },
    {
      value: 'option2',
      label: 'option 2'
    }
  ],
  required: true
};

export default {
  title: 'Components/Select',
  component: Select
};

export const withDefaultValue: React.FC = () => <Select {...data} />;
export const withPlaceholder: React.FC = () => <Select {...data} placeholder="Choose an option" />;
export const withoutLabel: React.FC = () => <Select {...data} hideLabel />;
export const success: React.FC = () => <Select {...data} success />;
export const error: React.FC = () => <Select {...data} error />;
export const disabled: React.FC = () => <Select {...data} disabled />;
