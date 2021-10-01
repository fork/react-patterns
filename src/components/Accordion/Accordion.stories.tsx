import React from 'react';
import { Story } from '@storybook/react';

import Accordion, { AccordionProps } from './Accordion';
import docs from './docs.mdx';

export default {
  title: 'Components/Content/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const Template: Story<AccordionProps> = args => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' }
  ]
};
