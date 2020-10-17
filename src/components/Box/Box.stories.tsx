import React from 'react';

import Box from './Box';

export default {
  title: 'Components/Box',
  component: Box
};

export const withPadding: React.FC = () => (
  <Box background="primary" padding="xl">
    Primary Background
  </Box>
);

export const withMargin: React.FC = () => (
  <Box background="primary" margin="xl">
    Primary Background
  </Box>
);

export const withMarginAndPadding: React.FC = () => (
  <Box background="primary" margin="xl" padding="l">
    Primary Background
  </Box>
);

export const withBorderRadius: React.FC = () => (
  <Box background="primary" margin="xl" padding="l" borderRadius="l">
    Primary Background
  </Box>
);

export const withTextAlign: React.FC = () => (
  <Box background="primary" alignment="center">
    Primary Background
  </Box>
);
