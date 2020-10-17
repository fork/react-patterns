import React, { useState } from 'react';

import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio
};

const options = [
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
];

export const withState: React.FC = () => {
  const [value, setValue] = useState('frau');

  return (
    <Radio
      id="radio-1"
      label="What do we eat for lunch?"
      value={value}
      options={options}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const withoutValue: React.FC = () => (
  <Radio id="radio-2" label="What do we eat for lunch?" options={options} />
);

export const withValue: React.FC = () => (
  <Radio id="radio-3" label="What do we eat for lunch?" value="ottos" options={options} />
);

export const withoutLabel: React.FC = () => (
  <Radio id="radio-4" label="What do we eat for lunch?" value="ottos" options={options} hideLabel />
);

export const error: React.FC = () => (
  <Radio
    id="radio-5"
    label="What do we eat for lunch?"
    options={options}
    error
    errorMessage="We need to eat something. Choose wisely."
    required
  />
);

export const disabled: React.FC = () => (
  <Radio id="radio-6" label="What do we eat for lunch?" options={options} disabled />
);
