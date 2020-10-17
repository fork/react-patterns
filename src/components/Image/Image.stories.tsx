import React from 'react';

import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image
};

export const Normal: React.FC = () => (
  <div style={{ maxWidth: '500px' }}>
    <Image src="/images/750x750.jpg" lazy />
  </div>
);
export const withRatio: React.FC = () => (
  <div style={{ maxWidth: '500px' }}>
    <Image ratio="1:1" src="/images/750x750.jpg" lazy />
  </div>
);

export const withSrcset: React.FC = () => (
  <div style={{ maxWidth: '500px' }}>
    <Image
      src="/images/750x750.jpg"
      srcset={{
        '1x': '/images/750x750.jpg',
        '2x': '/images/750x750-2x.jpg'
      }}
    />
  </div>
);

export const withSrcsetSizes: React.FC = () => (
  <div style={{ maxWidth: '1440px' }}>
    <Image
      src="/images/750x750-2x.jpg"
      srcset={{
        '1500w': '/images/750x750-2x.jpg',
        '750w': '/images/750x750.jpg'
      }}
      sizes="(min-width: 1440px) 1440w, 100vw"
    />
  </div>
);
