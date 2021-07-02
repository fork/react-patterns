import React from 'react';
import Stack from './Stack';
import Box from '../Box';
import docs from './docs.mdx';

export default {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const noGap = () => (
  <Stack>
    <Box background="primary" padding="s">
      Line 1
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
  </Stack>
);

export const withGap = () => (
  <Stack gap="m">
    <Box background="primary" padding="s">
      Line 1
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
    <Box background="primary" padding="s">
      Line 2
    </Box>
  </Stack>
);
