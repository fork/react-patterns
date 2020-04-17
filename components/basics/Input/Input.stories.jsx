import React, { useState } from 'react';

import Input from './Input';

import props from './data/00-default';

export default {
  title: 'Basics/Input',
  component: Input
};

export const withoutValue = () => <Input {...props} />;
export const withValue = () => <Input {...props} value="Johannes" />;
export const withoutLabel = () => <Input {...props} hideLabel />;
export const error = () => <Input {...props} value="Johannes" error />;
export const success = () => <Input {...props} value="Johannes" success />;
export const disabled = () => <Input {...props} disabled />;
export const withState = () => {
  const [value, setValue] = useState('');
  return <Input {...props} value={value} onChange={e => setValue(e.target.value)} />;
};
