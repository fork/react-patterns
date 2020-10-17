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

export const WithoutValue: React.FC = () => <Textarea {...props} />;
export const WithValue: React.FC = () => <Textarea {...props} value="Hans Peter" />;
export const Error: React.FC = () => (
  <Textarea {...props} error errorMessage="Bitte verfasse eine Nachricht." />
);
export const Success: React.FC = () => <Textarea {...props} success />;
export const withState: React.FC = () => {
  const [value, setValue] = useState('');
  return <Textarea {...props} value={value} onChange={e => setValue(e.target.value)} />;
};
