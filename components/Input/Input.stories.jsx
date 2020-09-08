import React, { useState } from 'react';

import Input from './Input';

import props from './data/00-default';

export default {
  title: 'Input',
  component: Input
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
