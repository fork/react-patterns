import React from 'react';

import AspectRatio from './AspectRatio';

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio
};

export const Square: React.FC = () => (
  <div style={{ background: '#80ff00', width: '400px' }}>
    <AspectRatio ratio="1:1">1:1</AspectRatio>
  </div>
);

export const Horizontal: React.FC = () => (
  <div style={{ background: '#80ff00', width: '400px' }}>
    <AspectRatio ratio="16:9">16:9</AspectRatio>
  </div>
);

export const Vertical: React.FC = () => (
  <div style={{ background: '#80ff00', width: '400px' }}>
    <AspectRatio ratio="2:3">2:3</AspectRatio>
  </div>
);
