import React from 'react';
import { Story, Meta } from '@storybook/react';

import Link, { LinkProps } from './Link';

export default {
  title: 'Components/Link',
  component: Link
} as Meta;

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Linklabel',
  href: 'https://fork.de'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Linklabel',
  href: 'https://fork.de',
  icon: 'Check'
};
