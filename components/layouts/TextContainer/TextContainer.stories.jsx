import React from 'react';

import TextContainer from './TextContainer';

export default {
  title: 'Layouts/TextContainer',
  component: TextContainer
};

export const withInnerHtml = () => (
  <TextContainer html="<h1>This is inner html</h1><p>This is inner html</p>" />
);

export const withChildren = () => (
  <TextContainer>
    <h1>This is html as children</h1>
    <p>This is html as children</p>
  </TextContainer>
);
