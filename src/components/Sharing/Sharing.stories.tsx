import React from 'react';

import Sharing from './Sharing';

export default {
  title: 'Components/Sharing',
  component: Sharing
};

export const Normal: React.FC = () => (
  <Sharing
    links={[
      { link: 'https://www.fork.de', icon: 'facebook', label: 'Share on Facebook' },
      { link: 'https://www.fork.de', icon: 'twitter', label: 'Share on Twitter' },
      { link: 'https://www.fork.de', icon: 'instagram', label: 'Share on Instagram' },
      { link: 'https://www.fork.de', icon: 'whatsApp', label: 'Share on WhatsApp' }
    ]}
  />
);
