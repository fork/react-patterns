import React from 'react';
import { shallow } from 'enzyme';

import IconButton from '../src/components/IconButton';

describe('IconButton', () => {
  test('IconButton should render correctly', () => {
    const component = shallow(<IconButton icon="close" label="Close" />);

    expect(component).toMatchSnapshot();
  });

  test('Secondary IconButton should render correctly', () => {
    const component = shallow(<IconButton icon="close" variant="secondary" label="Close" />);

    expect(component).toMatchSnapshot();
  });
});
