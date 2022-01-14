import React, { useState } from 'react';

import Password, { PasswordProps } from './Password';

export default {
  title: 'Components/Input/Password',
  component: Password
};

const props: PasswordProps = {
  id: 'password',
  label: 'Passwort',
  value: '',
  required: true,
  placeholder: 'Gebe einen Passwortn ein...',
  onChange: () => console.log('Change'),
  onFocus: () => console.log('Focus'),
  onBlur: () => console.log('Blur'),
  error: false,
  success: false,
  pattern: null,
  disabled: false,
  autocomplete: null,
  errorMessage: 'Das Passwort ist nicht lang genug.'
};

export const withoutValue = () => <Password {...props} />;
export const withValue = () => <Password {...props} value="Hans Peter" />;
export const withoutLabel = () => <Password {...props} hideLabel />;
export const error = () => <Password {...props} value="Hans Peter" error />;
export const success = () => <Password {...props} value="Hans Peter" success />;
export const disabled = () => <Password {...props} disabled />;

export const withState = () => {
  const [value, setValue] = useState('');
  return <Password {...props} value={value} onChange={e => setValue(e.target.value)} />;
};
