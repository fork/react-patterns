import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text
} as Meta;

const Template: Story<TextProps> = ({ children, ...args }) => <Text {...args}>{children}</Text>;

export const Main = Template.bind({});
Main.args = {
  children: 'This is a text component',
  variant: 'main'
};

export const Sub = Template.bind({});
Sub.args = {
  ...Main.args,
  variant: 'sub'
};

export const Colored = Template.bind({});
Colored.args = {
  ...Main.args,
  color: 'primary'
};
