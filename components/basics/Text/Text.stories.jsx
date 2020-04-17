import React from 'react';

import Text from './Text';

export default {
  title: 'Basics/Text',
  component: Text
};

export const Normal = () => <Text>This is a text component</Text>;
export const Colored = () => <Text color="primary">This is a text component</Text>;
