import React from 'react';
import { storiesOf } from '@storybook/react';

import CookieLayer from './cookieLayer';

const data = require('./data/00-default');

storiesOf('Components|Molecules', module).add('CookieLayer', () => (
  <CookieLayer
    {...data}
    onAccept={() => console.log('Accept')}
    onReject={() => console.log('Reject')}
  />
));
