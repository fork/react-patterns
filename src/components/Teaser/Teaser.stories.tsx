import React from 'react';

import Teaser from './Teaser';
import docs from './docs.mdx';

export default {
  title: 'Components/Navigation/Teaser',
  component: Teaser,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const Default = () => (
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

export const withoutImage = () => (
  <Teaser headline="A Highlighting Headline" copy="And a capturing copy" />
);
