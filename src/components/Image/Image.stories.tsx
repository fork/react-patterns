import React from 'react';

import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image
};

export const Normal: React.FC = () => (
  <div style={{ maxWidth: '500px' }}>
    <Image src="/images/750x750.jpg" lazy width={750} height={750} />
  </div>
);

export const withSrcset: React.FC = () => (
  <div style={{ maxWidth: '500px' }}>
    <Image
      src="/images/750x750.jpg"
      srcSet="/images/750x750.jpg 1x, /images/750x750-2x.jpg 2x"
      width={750}
      height={750}
    />
  </div>
);

export const withSrcsetSizes: React.FC = () => (
  <div style={{ maxWidth: '1440px' }}>
    <Image
      src="/images/750x750-2x.jpg"
      srcSet="/images/750x750-2x.jpg 1500w, /images/750x750.jpg 750w"
      sizes="(min-width: 1440px) 1440w, 100vw"
      width={750}
      height={750}
    />
  </div>
);

export const Picture: React.FC = () => (
  <div style={{ maxWidth: '1440px' }}>
    <picture>
      <Image as="source" lazy srcSet="/images/750x750.jpg" media="(min-width:1600px)" />
      <Image
        as="source"
        lazy
        media="(min-width:500px)"
        srcSet="/images/750x750-2x.jpg 1500w, /images/750x750.jpg 750w"
        sizes="100vw"
      />
      <Image
        as="source"
        lazy
        media="(min-width:500px)"
        srcSet="/images/750x750.jpg 1x, /images/750x750-2x.jpg 2x"
        sizes="100vw"
      />
      <Image lazy srcSet="/images/750x750.jpg" sizes="100vw" width={750} height={750} />
    </picture>
  </div>
);
