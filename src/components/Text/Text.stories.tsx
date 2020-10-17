import React from 'react';

import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text
};

export const Normal: React.FC = () => <Text>This is a text component</Text>;
export const Colored: React.FC = () => <Text color="primary">This is a text component</Text>;
