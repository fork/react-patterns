import React from 'react';

import Teaser from './Teaser';

export default {
  title: 'Components/Teaser',
  component: Teaser
};

export const Normal = () => (
  <Teaser
    headline="A Highlighting Headline"
    copy="And a capturing copy"
    image={{
      src: '/images/750x750.jpg',
      srcset: '/images/750x750.jpg',
      ratio: '1:1',
      alt: 'Fan on red background'
    }}
  />
);

export const withoutImage = () => (
  <Teaser headline="A Highlighting Headline" copy="And a capturing copy" />
);
