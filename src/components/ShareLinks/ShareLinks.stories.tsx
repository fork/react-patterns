import React from 'react';
import { Story } from '@storybook/react';

import ShareLinks, { ShareLinksProps } from './ShareLinks';
import docs from './docs.mdx';

export default {
  title: 'Components/Navigation/ShareLinks',
  component: ShareLinks,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const Template: Story<ShareLinksProps> = args => <ShareLinks {...args} />;
export const Default = Template.bind({});
Default.args = {
  links: ['Facebook', 'Instagram', 'Twitter', 'WhatsApp', 'Mail'],
  url: 'https://fork.de',
  subject: 'Subject',
  text: 'Text',
  title: 'Title'
};
