import React from 'react';

import AspectRatio from './AspectRatio';

export default {
  title: 'AspectRatio',
  component: AspectRatio
};

export const Square = () => (
  <div style={{ background: 'red', width: '400px' }}>
    <AspectRatio ratio="1:1">1:1</AspectRatio>
  </div>
);

export const Horizontal = () => (
  <div style={{ background: 'red', width: '400px' }}>
    <AspectRatio ratio="16:9">16:9</AspectRatio>
  </div>
);

export const Vertical = () => (
  <div style={{ background: 'red', width: '400px' }}>
    <AspectRatio ratio="2:3">2:3</AspectRatio>
  </div>
);
