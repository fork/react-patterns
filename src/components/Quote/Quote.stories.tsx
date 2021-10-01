import React from 'react';
import { Story } from '@storybook/react';

import Quote, { QuoteProps } from './Quote';
import docs from './docs.mdx';

export default {
  title: 'Components/Content/Quote',
  component: Quote,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const defaultData = {
  quote: 'May the Fork be with you 📐',
  author: 'Fork Unstable Media'
};

const Template: Story<QuoteProps> = args => <Quote {...args} />;

export const Default = Template.bind({});
Default.args = defaultData;

export const NoAuthor = Template.bind({});
NoAuthor.args = { ...defaultData, author: null };
