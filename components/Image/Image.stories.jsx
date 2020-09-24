import React from 'react';

import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image
};

export const Normal = () => (
  <div style={{ maxWidth: '500px' }}>
    <Image src="/images/760x570.jpg" lazy />
  </div>
);
export const withRatio = () => (
  <div style={{ maxWidth: '500px' }}>
    <Image ratio="16:9" src="/images/760x570.jpg" lazy />
  </div>
);
