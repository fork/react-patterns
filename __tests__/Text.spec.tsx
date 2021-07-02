import { ThemeProvider } from 'styled-components';
import React from 'react';
import { shallow } from 'enzyme';

import Text from '../src/components/Text';
import tokens from '../src/tokens';

describe('Text', () => {
  test('Text should render correctly', () => {
    const component = shallow(
      <ThemeProvider theme={tokens}>
        <Text>Primary Text</Text>
      </ThemeProvider>
    );

    expect(component).toMatchSnapshot();
  });
});
