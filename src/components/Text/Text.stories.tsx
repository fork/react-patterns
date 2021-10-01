import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text, { TextProps } from './Text';
import docs from './docs.mdx';

export default {
  title: 'Tokens/Text',
  component: Text,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const Template: Story<TextProps> = ({ children, ...args }) => <Text {...args}>{children}</Text>;

const defaults = { children: 'This is a text component' };

export const Headline1 = Template.bind({});
Headline1.args = { ...defaults, variant: 'headline1' };

export const Headline2 = Template.bind({});
Headline2.args = { ...defaults, variant: 'headline2' };

export const Headline3 = Template.bind({});
Headline3.args = { ...defaults, variant: 'headline3' };

export const Headline4 = Template.bind({});
Headline4.args = { ...defaults, variant: 'headline4' };

export const Copy = Template.bind({});
Copy.args = { ...defaults, variant: 'copy' };

export const CopySmall = Template.bind({});
CopySmall.args = { ...defaults, variant: 'copySmall' };

export const Quote = Template.bind({});
Quote.args = { ...defaults, variant: 'quote' };

export const Button = Template.bind({});
Button.args = { ...defaults, variant: 'button' };

export const Link = Template.bind({});
Link.args = { ...defaults, variant: 'link' };

export const FormValue = Template.bind({});
FormValue.args = { ...defaults, variant: 'formValue' };

export const FormLabel = Template.bind({});
FormLabel.args = { ...defaults, variant: 'formLabel' };

export const FormHint = Template.bind({});
FormHint.args = { ...defaults, variant: 'formHint' };

export const Colored = Template.bind({});
Colored.args = { ...defaults, color: 'primary' };
