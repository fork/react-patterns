import React from 'react';
import { Story, Meta } from '@storybook/react';

import TeaserContainer, { TeaserContainerProps } from './TeaserContainer';
import Teaser from '../Teaser/Teaser';
import docs from './docs.mdx';

export default {
  title: 'Components/Layout/TeaserContainer',
  component: TeaserContainer,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const teaserDefault = {
  href: '#',
  title: 'Teaser Title',
  copy: 'And a capturing copy',
  linkText: 'Read more'
};

const teaserWithImage = {
  ...teaserDefault,
  image: {
    src: '/images/750x750.jpg',
    srcset: { '400w': '/images/750x750.jpg' },
    ratio: '1:1',
    alt: 'Fan on red background'
  }
};

const Template: Story<TeaserContainerProps> = ({ children, ...args }) => (
  <TeaserContainer {...args}>{children}</TeaserContainer>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Teaser {...teaserDefault} />
      <Teaser {...teaserDefault} />
      <Teaser {...teaserWithImage} />
      <Teaser {...teaserWithImage} />
    </>
  )
};
