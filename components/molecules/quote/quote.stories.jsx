import React from 'react';
import { storiesOf } from '@storybook/react';

import Quote from './quote';
import data from './data/00-default';

const componentInfo = {
  component: Quote,
  status: 'wip'
};

storiesOf('Components|Molecules', module).add('Quote', () => <Quote {...data} />, {
  componentInfo
});
