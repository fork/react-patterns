import React from 'react';

import Richtext from './Richtext';

export default {
  title: 'Components/Richtext',
  component: Richtext
};

export const withInnerHtml: React.FC = () => (
  <Richtext html="<h1>This is inner html</h1><p>This is inner html</p>" />
);

export const withChildren: React.FC = () => (
  <Richtext>
    <h1>This is html as children</h1>
    <p>This is html as children</p>
  </Richtext>
);
