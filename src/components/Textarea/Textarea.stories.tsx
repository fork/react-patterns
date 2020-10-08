import React, { useState } from 'react';

import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea
};

const props = {
  id: '2',
  name: 'textarea',
  label: 'Your message',
  placeholder: 'Enter your message...'
};

export const WithoutValue = () => <Textarea {...props} />;
export const WithValue = () => <Textarea {...props} value="Hans Peter" />;
export const Error = () => (
  <Textarea {...props} error errorMessage="Bitte verfasse eine Nachricht." />
);
export const Success = () => <Textarea {...props} success />;
export const withState = () => {
  const [value, setValue] = useState('');
  return <Textarea {...props} value={value} onChange={e => setValue(e.target.value)} />;
};
