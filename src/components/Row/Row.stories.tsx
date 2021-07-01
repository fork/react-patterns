import React from 'react';
import Row from './Row';
import Box from '../Box';

export default {
  title: 'Components/Row',
  component: Row
};

export const noGap = () => (
  <Row>
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
  </Row>
);

export const withGap = () => (
  <Row gap="m">
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
  </Row>
);
