import React from 'react';

import IconButton from './IconButton';

export default {
  title: 'Basics/IconButton',
  component: IconButton
};

export const Small = () => (
  <>
    <IconButton icon="date" variant="primary">
      Primary
    </IconButton>
    <IconButton icon="date" variant="secondary">
      Secondary
    </IconButton>
  </>
);

export const Large = () => (
  <>
    <IconButton icon="date" size="large" variant="primary">
      Primary
    </IconButton>
    <IconButton icon="date" size="large" variant="secondary">
      Secondary
    </IconButton>
  </>
);

export const asLink = () => (
  <>
    <IconButton icon="date" variant="primary" href="https://wwww.fork.de" target="_blank">
      Primary
    </IconButton>
  </>
);
