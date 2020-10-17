import React from 'react';

import Teaser from './Teaser';

export default {
  title: 'Components/Teaser',
  component: Teaser
};

export const Normal: React.FC = () => (
  <Teaser
    headline="A Highlighting Headline"
    copy="And a capturing copy"
    image={{
      src: '/images/750x750.jpg',
      srcset: { '400w': '/images/750x750.jpg' },
      ratio: '1:1',
      alt: 'Fan on red background'
    }}
  />
);

export const withoutImage: React.FC = () => (
  <Teaser headline="A Highlighting Headline" copy="And a capturing copy" />
);
