import React from 'react';
import { storiesOf } from '@storybook/react';

import data from './data/00-default';
import MixedCopy from './mixed-copy';

storiesOf('Components|Molecules', module).add('MixedCopy', () => <MixedCopy {...data} />);
