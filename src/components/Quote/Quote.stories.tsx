import React from 'react';

import Quote from './Quote';
import docs from './docs.mdx';

export default {
  title: 'Components/Quote',
  component: Quote,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const Default = () => (
  <Quote author="Fork Unstable Media" quote="May the Fork be with you 📐" />
);
export const NoAuthor = () => <Quote quote="May the Fork be with you 📐" />;
