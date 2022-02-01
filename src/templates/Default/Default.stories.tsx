import React from 'react';
import { Story, Meta } from '@storybook/react';

import DefaultTemplate, { DefaultTemplateProps } from './Default';

export default {
  title: 'Templates/Default',
  component: DefaultTemplate
} as Meta;

const Template: Story<DefaultTemplateProps> = args => <DefaultTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Template Content.'
};
