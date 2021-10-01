import React from 'react';
import { Story, Meta } from '@storybook/react';

import Quote, { QuoteProps } from './Quote';
import docs from './docs.mdx';

export default {
  title: 'Components/Quote',
  component: Quote,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const Template: Story<QuoteProps> = args => <Quote {...args} />;

export const Default = Template.bind({});
Default.args = {
  quote: 'May the Fork be with you',
  author: 'Fork Unstable Media'
};
export const NoAuthor = Template.bind({});
NoAuthor.args = {
  quote: 'May the Fork be with you'
};
