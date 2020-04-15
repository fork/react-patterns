import React from 'react';

import Quote from './Quote';

export default {
  title: 'Elements/Quote',
  component: Quote
};

export const Normal = () => <Quote author="Nobody ever" quote="Live, laugh, love." />;
export const NoAuthor = () => <Quote quote="Live, laugh, love." />;
