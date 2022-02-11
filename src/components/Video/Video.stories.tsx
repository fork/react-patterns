import React from 'react';
import { Story } from '@storybook/react';

import docs from './docs.mdx';
import Video, { VideoProps } from './Video';

export default {
  title: 'Components/Content/Video',
  parameters: {
    docs: {
      page: docs
    }
  },
  component: Video
};

const Template: Story<VideoProps> = args => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  caption: 'Video caption',
  poster: 'images/poster.png',
  src: 'videos/video.mp4',
  type: 'file'
};

export const Youtube = Template.bind({});
Youtube.args = {
  caption: 'Video caption',
  poster: 'images/poster.png',
  id: 'qxrmosy1jCY',
  type: 'youtube'
};

export const Vimeo = Template.bind({});
Vimeo.args = {
  caption: 'Video caption',
  poster: 'images/poster.png',
  id: '124813126',
  type: 'vimeo'
};
