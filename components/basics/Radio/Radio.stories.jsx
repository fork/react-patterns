import React, { useState } from 'react';

import Radio from './Radio';

export default {
  title: 'Basics/Radio',
  component: Radio
};

const options = [
  {
    value: 'frau',
    label: 'Frau'
  },
  {
    value: 'herr',
    label: 'Herr'
  },
  {
    value: 'divers',
    label: 'Divers'
  }
];

export const withState = () => {
  const [value, setValue] = useState('frau');

  return (
    <Radio
      id="radio-1"
      label="Anrede"
      value={value}
      options={options}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const withoutValue = () => <Radio id="radio-2" label="Anrede" options={options} />;

export const withValue = () => (
  <Radio id="radio-3" label="Anrede" value="divers" options={options} />
);

export const withoutLabel = () => (
  <Radio id="radio-4" label="Anrede" value="divers" options={options} hideLabel />
);

export const error = () => (
  <Radio
    id="radio-5"
    label="Anrede"
    options={options}
    error
    errorMessage="Dies ist ein Pflichtfeld"
    required
  />
);

export const disabled = () => <Radio id="radio-6" label="Anrede" options={options} disabled />;
