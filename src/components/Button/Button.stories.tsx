import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button
};

export const Small: React.FC = () => (
  <>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </>
);

export const Large: React.FC = () => (
  <>
    <Button variant="primary" size="large">
      Primary
    </Button>
    <Button variant="secondary" size="large">
      Secondary
    </Button>
  </>
);
