import React from 'react';

import Box from '../Box';

import Flex from './Flex';

export default {
  title: 'Components/Flex',
  component: Flex
};

export const row: React.FC = () => (
  <Flex>
    <Box padding="xl" background="primary">
      Box 1
    </Box>
    <Box padding="s" background="secondary">
      Box 2
    </Box>
  </Flex>
);

export const column: React.FC = () => (
  <Flex direction="column">
    <Box padding="xl" background="primary">
      Box 1
    </Box>
    <Box padding="s" background="secondary">
      Box 2
    </Box>
  </Flex>
);

export const Center: React.FC = () => (
  <Flex justifyContent="center" alignItems="center">
    <Box padding="xl" background="primary">
      Box 1
    </Box>
    <Box padding="s" background="secondary">
      Box 2
    </Box>
  </Flex>
);

export const flexGrow: React.FC = () => (
  <Flex alignItems="center">
    <Box padding="xl" background="primary">
      Box 1
    </Box>

    <Box padding="s" background="secondary" flexGrow={2}>
      Box 2
    </Box>
  </Flex>
);
