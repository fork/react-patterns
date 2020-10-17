import React from 'react';

import IconButton from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton
};

export const Small: React.FC = () => (
  <>
    <IconButton icon="date" label="This is a label" variant="primary" />
    <IconButton icon="date" label="This is a label" variant="secondary" />
  </>
);

export const Large: React.FC = () => (
  <>
    <IconButton icon="date" size="large" label="This is a label" variant="primary" />
    <IconButton icon="date" size="large" label="This is a label" variant="secondary" />
  </>
);
