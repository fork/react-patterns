import React from 'react';

import AspectRatio from './AspectRatio';
import docs from './docs.mdx';

export default {
  title: 'Components/Utility/AspectRatio',
  component: AspectRatio,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const Default = () => (
  <div style={{ background: '#80ff00', width: '400px' }}>
    <AspectRatio ratio="16:9">16:9</AspectRatio>
  </div>
);
