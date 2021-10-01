import React from 'react';

import ShareLinks from './ShareLinks';
import docs from './docs.mdx';

export default {
  title: 'Components/Navigation/ShareLinks',
  component: ShareLinks,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const Default = () => (
  <ShareLinks
    links={['Facebook', 'Instagram', 'Twitter', 'WhatsApp', 'Mail']}
    url="https://fork.de"
    subject="Subject"
    text="Text"
    title="Title"
  />
);
