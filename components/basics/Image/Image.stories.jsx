import React from 'react';

import Image from './Image';

export default {
  title: 'Basics/Image',
  component: Image
};

export const Normal = () => (
  <div style={{ maxWidth: '500px' }}>
    <Image src="/public/images/760x570.jpg" lazy />
  </div>
);
export const withRatio = () => (
  <div style={{ maxWidth: '500px' }}>
    <Image ratio="16:9" src="/public/images/760x570.jpg" lazy />
  </div>
);
