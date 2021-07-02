import React from 'react';

import Box from '../Box';

import Flex from './Flex';
import docs from './docs.mdx';

export default {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const row = () => (
  <Flex>
    <Box padding="xl" background="primary">
      Box 1
    </Box>
    <Box padding="s" background="secondary">
      Box 2
    </Box>
  </Flex>
);

export const column = () => (
  <Flex direction="column">
    <Box padding="xl" background="primary">
      Box 1
    </Box>
    <Box padding="s" background="secondary">
      Box 2
    </Box>
  </Flex>
);

export const Center = () => (
  <Flex justifyContent="center" alignItems="center">
    <Box padding="xl" background="primary">
      Box 1
    </Box>
    <Box padding="s" background="secondary">
      Box 2
    </Box>
  </Flex>
);

export const flexGrow = () => (
  <Flex alignItems="center">
    <Box padding="xl" background="primary">
      Box 1
    </Box>

    <Box padding="s" background="secondary" flexGrow={2}>
      Box 2
    </Box>
  </Flex>
);
