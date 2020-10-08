import React from 'react';

import Quote from './Quote';

export default {
  title: 'Components/Quote',
  component: Quote
};

export const Normal = () => (
  <Quote author="Fork Unstable Media" quote="May the Fork be with you 📐" />
);
export const NoAuthor = () => <Quote quote="May the Fork be with you 📐" />;
