import React from 'react';

import Richtext from './Richtext';

export default {
  title: 'Elements/Richtext',
  component: Richtext
};

export const withInnerHtml = () => (
  <Richtext html="<h1>This is inner html</h1><p>This is inner html</p>" />
);

export const withChildren = () => (
  <Richtext>
    <h1>This is html as children</h1>
    <p>This is html as children</p>
  </Richtext>
);
