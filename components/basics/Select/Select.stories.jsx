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
  title: 'Basics/Select',
  component: Select
};

export const withDefaultValue = () => <Select {...data} />;
export const withPlaceholder = () => <Select {...data} placeholder="Choose an option" />;
export const withoutLabel = () => <Select {...data} hideLabel />;
export const success = () => <Select {...data} success />;
export const error = () => <Select {...data} error />;
export const disabled = () => <Select {...data} disabled />;
