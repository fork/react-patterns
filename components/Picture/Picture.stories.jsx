import React from 'react';

import Picture, { PictureSource } from './index';

export default {
  title: 'Components/Picture',
  component: Picture
};

export const Normal = () => (
  <div style={{ maxWidth: '800px' }}>
    <Picture src="/images/600x400.jpg" alt="A fan on red background" lazy>
      <PictureSource
        media="(min-width: 400px)"
        srcSet={{
          '1500w': '/images/750x750-2x.jpg',
          '750w': '/images/750x750.jpg'
        }}
        sizes="100vw"
        lazy
      />
    </Picture>
  </div>
);
