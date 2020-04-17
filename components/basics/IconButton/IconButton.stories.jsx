import React from 'react';

import IconButton from './IconButton';

export default {
  title: 'Basics/IconButton',
  component: IconButton
};

export const Small = () => (
  <>
    <IconButton icon="date" label="This is a label" variant="primary" />

    <IconButton icon="date" label="This is a label" variant="secondary" />
  </>
);

export const Large = () => (
  <>
    <IconButton icon="date" size="large" label="This is a label" variant="primary" />
    <IconButton icon="date" size="large" label="This is a label" variant="secondary" />
  </>
);

export const asLink = () => (
  <>
    <IconButton
      icon="date"
      variant="primary"
      href="https://wwww.fork.de"
      label="This is a label"
      target="_blank"
    />
    <IconButton
      icon="date"
      variant="secondary"
      size="large"
      href="https://wwww.fork.de"
      label="This is a label"
      target="_blank"
    />
  </>
);
