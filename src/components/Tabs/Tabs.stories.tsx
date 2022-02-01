import React from 'react';
import { Story } from '@storybook/react';

import Tabs, { TabsProps } from './Tabs';
import Tab from './Tab';
import docs from './docs.mdx';

export default {
  title: 'Components/Layout/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const TemplateDefault: Story<TabsProps> = args => (
  <Tabs {...args}>
    <Tab title="Profile">
      <h2>Profile</h2>
    </Tab>
    <Tab title="Friends">
      <h2>Friends</h2>
    </Tab>
    <Tab title="Contact">
      <h2>Contact</h2>
    </Tab>
  </Tabs>
);

const TemplateLong: Story<TabsProps> = args => (
  <Tabs {...args}>
    <Tab title="Pricing">
      <h2>Pricing</h2>
    </Tab>
    <Tab title="Rainbows">
      <h2>Rainbows</h2>
    </Tab>
    <Tab title="Unicorns">
      <h2>Unicorns</h2>
    </Tab>
    <Tab title="Falafel">
      <h2>Falafel</h2>
    </Tab>
    <Tab title="Delorean">
      <h2>Delorean</h2>
    </Tab>
    <Tab title="Po-ta-toes">
      <h2>Po-ta-toes</h2>
    </Tab>
    <Tab title="Jesuits">
      <h2>Jesuits</h2>
    </Tab>
    <Tab title="Mastadon">
      <h2>Mastadon</h2>
    </Tab>
    <Tab title="Funicular">
      <h2>Funicular</h2>
    </Tab>
    <Tab title="DiCaprio">
      <h2>DiCaprio</h2>
    </Tab>
    <Tab title="Fathomable">
      <h2>Fathomable</h2>
    </Tab>
    <Tab title="Shiny">
      <h2>Shiny</h2>
    </Tab>
    <Tab title="Cyprus">
      <h2>Cyprus</h2>
    </Tab>
    <Tab title="UMass">
      <h2>UMass</h2>
    </Tab>
    <Tab title="Skiing">
      <h2>Skiing</h2>
    </Tab>
    <Tab title="Liver">
      <h2>Liver</h2>
    </Tab>
    <Tab title="Magazine">
      <h2>Magazine</h2>
    </Tab>
    <Tab title="UMass">
      <h2>UMass</h2>
    </Tab>
    <Tab title="Skiing">
      <h2>Skiing</h2>
    </Tab>
    <Tab title="Liver">
      <h2>Liver</h2>
    </Tab>
    <Tab title="Magazine">
      <h2>Magazine</h2>
    </Tab>
  </Tabs>
);

export const Default = TemplateDefault.bind({});

export const Centered = TemplateDefault.bind({});
Centered.args = { centered: true };

export const Scrolled = TemplateLong.bind({});
Scrolled.args = { centered: true };
