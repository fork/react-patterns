import React from 'react';
import { Story } from '@storybook/react';

import Image, { ImageProps } from './Image';
import docs from './docs.mdx';

export default {
  title: 'Components/Content/Image',
  component: Image,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const Template: Story<ImageProps> = args => (
  <div>
    <Image {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { width: 750, height: 750, src: '/images/750x750.jpg' };

export const withSrcset = Template.bind({});
withSrcset.args = {
  width: 750,
  height: 750,
  src: '/images/750x750.jpg',
  srcSet: '/images/750x750.jpg 1x, /images/750x750-2x.jpg 2x'
};

export const withSrcsetSizes = Template.bind({});
withSrcset.args = {
  width: 750,
  height: 750,
  src: '/images/750x750-2x.jpg',
  srcSet: '/images/750x750-2x.jpg 1500w, /images/750x750.jpg 750w',
  sizes: '(min-width: 1440px) 1440w, 100vw'
};

export const Picture = () => (
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
