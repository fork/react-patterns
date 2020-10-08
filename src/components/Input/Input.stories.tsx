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
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
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
export const withState = () => {
  const [value, setValue] = useState('');
  return <Input {...props} value={value} onChange={e => setValue(e.target.value)} />;
};
