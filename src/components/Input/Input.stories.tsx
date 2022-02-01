import React, { useState } from 'react';

import Input, { InputProps } from './Input';
import docs from './docs.mdx';

export default {
  title: 'Components/Input/Input',
  component: Input,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const props: InputProps = {
  id: 'firstName',
  label: 'Vorname',
  value: '',
  required: true,
  type: 'text',
  placeholder: 'Gebe einen Vornamen ein...',
  onChange: () => console.log('Change'),
  onFocus: () => console.log('Focus'),
  onBlur: () => console.log('Blur'),
  error: false,
  success: false,
  pattern: null,
  disabled: false,
  autocomplete: null,
  errorMessage: 'Gebe einen richtigen Vornamen ein.'
};

export const withoutValue = () => <Input {...props} />;
export const withValue = () => <Input {...props} value="Hans Peter" />;
export const withoutLabel = () => <Input {...props} hideLabel />;
export const error = () => <Input {...props} value="Hans Peter" error />;
export const success = () => <Input {...props} value="Hans Peter" success />;
export const disabled = () => <Input {...props} disabled />;
export const withList = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
      list={{
        id: 'names',
        options: [
          'Andreas',
          'Holger',
          'Jan',
          'Joachim',
          'Johannes',
          'Jonas',
          'Julia',
          'Leonard',
          'Martin',
          'Olaf',
          'Sascha',
          'Siegfried',
          'Wolf'
        ]
      }}
    />
  );
};
export const withState = () => {
  const [value, setValue] = useState('');
  return <Input {...props} value={value} onChange={e => setValue(e.target.value)} />;
};
