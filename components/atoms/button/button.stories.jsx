import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './button';

storiesOf('Components|Atoms/Button', module)
  .add('Default', () => <Button>Test</Button>)
  .add('Disabled', () => <Button disabled>Test</Button>);
