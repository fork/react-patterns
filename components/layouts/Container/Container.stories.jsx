import React from 'react';

import Container from './Container';

export default {
  title: 'Layouts/Container',
  component: Container
};

export const withPadding = () => (
  <Container background="primary" padding="xl">
    Primary Background
  </Container>
);

export const withMargin = () => (
  <Container background="primary" margin="xl">
    Primary Background
  </Container>
);

export const withMarginAndPadding = () => (
  <Container background="primary" margin="xl" padding="l">
    Primary Background
  </Container>
);

export const withBorderRadius = () => (
  <Container background="primary" margin="xl" padding="l" borderRadius="l">
    Primary Background
  </Container>
);

export const withTextAlign = () => (
  <Container background="primary" alignment="center">
    Primary Background
  </Container>
);
