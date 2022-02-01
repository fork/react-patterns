import React from 'react';

import Select from './Select';
import docs from './docs.mdx';

const data = {
  id: '2',
  label: 'Select an option',
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
  required: true,
  errorMessage: 'Please choose an Option'
};

export default {
  title: 'Components/Input/Select',
  component: Select,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const withDefaultValue = () => (
  <Select {...data} defaultValue="option1" placeholder="Choose an option" />
);
export const withPlaceholder = () => <Select {...data} placeholder="Choose an option" />;
export const withoutLabel = () => <Select {...data} hideLabel />;
export const success = () => <Select {...data} success />;
export const error = () => <Select {...data} error />;
export const disabled = () => <Select {...data} disabled />;
