import React, { useState } from 'react';

import Input, { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input
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

export const withoutValue: React.FC = () => <Input {...props} />;
export const withValue: React.FC = () => <Input {...props} value="Hans Peter" />;
export const withoutLabel: React.FC = () => <Input {...props} hideLabel />;
export const error: React.FC = () => <Input {...props} value="Hans Peter" error />;
export const success: React.FC = () => <Input {...props} value="Hans Peter" success />;
export const disabled: React.FC = () => <Input {...props} disabled />;
export const withList: React.FC = () => {
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
export const withState: React.FC = () => {
  const [value, setValue] = useState('');
  return <Input {...props} value={value} onChange={e => setValue(e.target.value)} />;
};
