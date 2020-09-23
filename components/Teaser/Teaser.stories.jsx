import React from 'react';

import Teaser from './Teaser';

export default {
  title: 'Teaser',
  component: Teaser
};

export const Normal = () => (
  <Teaser
    headline="Dummy headline"
    copy="Dumm intro copy"
    image={{
      src: '/images/760x570.jpg',
      srcset: '/images/760x570.jpg',
      ratio: '4:3',
      alt: 'Robot Girl'
    }}
  />
);

export const withoutImage = () => <Teaser headline="Dummy headline" copy="Dumm intro copy" />;
