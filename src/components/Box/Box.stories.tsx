import React from 'react';

import Box from './Box';
import docs from './docs.mdx';

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const withPadding = () => (
  <Box background="primary" padding="xl">
    Primary Background
  </Box>
);

export const withMargin = () => (
  <Box background="primary" margin="xl">
    Primary Background
  </Box>
);

export const withMarginAndPadding = () => (
  <Box background="primary" margin="xl" padding="l">
    Primary Background
  </Box>
);

export const withBorderRadius = () => (
  <Box background="primary" margin="xl" padding="l" borderRadius="l">
    Primary Background
  </Box>
);

export const withTextAlign = () => (
  <Box background="primary" alignment="center">
    Primary Background
  </Box>
);
