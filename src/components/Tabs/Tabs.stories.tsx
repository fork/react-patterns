import React from 'react';

import Tabs from './Tabs';
import Tab from './Tab';

export default {
  title: 'Components/Tabs',
  component: Tabs
};

export const Simple: React.FC = () => (
  <Tabs>
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

export const Centered: React.FC = () => (
  <Tabs centered>
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

export const Scrolled: React.FC = () => (
  <Tabs>
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
