import React from 'react';

import Sharing from './Sharing';
import docs from './docs.mdx';

export default {
  title: 'Components/Sharing',
  component: Sharing,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const Default = () => (
  <Sharing
    links={[
      { link: 'https://www.fork.de', icon: 'facebook', label: 'Share on Facebook' },
      { link: 'https://www.fork.de', icon: 'twitter', label: 'Share on Twitter' },
      { link: 'https://www.fork.de', icon: 'instagram', label: 'Share on Instagram' },
      { link: 'https://www.fork.de', icon: 'whatsApp', label: 'Share on WhatsApp' }
    ]}
  />
);
