import React from 'react';
import { Story, Meta } from '@storybook/react';

import Teaser, { TeaserProps } from './Teaser';
import docs from './docs.mdx';

export default {
  title: 'Components/Navigation/Teaser',
  component: Teaser,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const defaultData = {
  href: '#',
  title: 'A Highlighting Headline',
  copy: 'And a capturing copy',
  linkText: 'Read more'
};

const Template: Story<TeaserProps> = args => <Teaser {...args} />;

export const Default = Template.bind({});
Default.args = defaultData;

export const NoAuthor = Template.bind({});
NoAuthor.args = {
  ...defaultData,
  image: {
    src: '/images/750x750.jpg',
    srcset: { '400w': '/images/750x750.jpg' },
    ratio: '1:1',
    alt: 'Fan on red background'
  }
};
