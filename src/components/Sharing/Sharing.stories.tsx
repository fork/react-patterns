import React from 'react';
import { Story } from '@storybook/react';

import Sharing, { SharingProps } from './Sharing';
import docs from './docs.mdx';

export default {
  title: 'Components/Navigation/Sharing',
  component: Sharing,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const Template: Story<SharingProps> = args => <Sharing {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { link: 'https://www.fork.de', icon: 'facebook', label: 'Share on Facebook' },
    { link: 'https://www.fork.de', icon: 'twitter', label: 'Share on Twitter' },
    { link: 'https://www.fork.de', icon: 'instagram', label: 'Share on Instagram' },
    { link: 'https://www.fork.de', icon: 'whatsApp', label: 'Share on WhatsApp' }
  ]
};
