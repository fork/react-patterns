import React from 'react';
import { storiesOf } from '@storybook/react';

import Sharing from './sharing';
import data from './data/00-default';

const componentInfo = {
  component: Sharing,
  status: 'wip'
};

storiesOf('Components|Molecules', module).add('Sharing', () => <Sharing {...data} />, {
  componentInfo
});
