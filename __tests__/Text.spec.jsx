import React from 'react';
import { shallow } from 'enzyme';

import Text from '../components/Text';

describe('Text', () => {
  test('Text should render correctly', () => {
    const component = shallow(<Text>Primary Text</Text>);

    expect(component).toMatchSnapshot();
  });
});
