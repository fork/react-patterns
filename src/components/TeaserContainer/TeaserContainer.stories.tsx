import React from 'react';
import { Story, Meta } from '@storybook/react';

import TeaserContainer, { TeaserContainerProps } from './TeaserContainer';
import Teaser from '../Teaser/Teaser';
import docs from './docs.mdx';

export default {
  title: 'Components/TeaserContainer',
  component: TeaserContainer,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const Template: Story<TeaserContainerProps> = ({ children, ...args }) => (
  <TeaserContainer {...args}>{children}</TeaserContainer>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Teaser headline="Teaser-Headline" />
      <Teaser headline="Teaser-Headline" />
      <Teaser headline="Teaser-Headline" />
      <Teaser headline="Teaser-Headline" />
      <Teaser headline="Teaser-Headline" />
      <Teaser headline="Teaser-Headline" />
      <Teaser headline="Teaser-Headline" />
    </>
  )
};
