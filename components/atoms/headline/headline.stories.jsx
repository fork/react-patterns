import React from 'react';
import { storiesOf } from '@storybook/react';

import Headline from './headline';

storiesOf('Components|Atoms', module).add('Headline', () =>
  [...Array(6)].map((element, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Headline key={index} tag={`h${index + 1}`}>
      H{index + 1} Lorem ipsum dolor sit amet
    </Headline>
  ))
);
