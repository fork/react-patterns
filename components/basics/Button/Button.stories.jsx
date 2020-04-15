import React from 'react';

import Button from './Button';

export default {
  title: 'Basics/Button',
  component: Button
};

export const Small = () => (
  <>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </>
);

export const Large = () => (
  <>
    <Button variant="primary" size="large">
      Primary
    </Button>
    <Button variant="secondary" size="large">
      Secondary
    </Button>
  </>
);

export const asLink = () => (
  <>
    <Button variant="primary" size="large" href="https://wwww.fork.de" target="_blank">
      Primary
    </Button>
  </>
);
