import React from 'react';
import { shallow } from 'enzyme';

import IconButton from '../src/components/IconButton';

describe('IconButton', () => {
  test('IconButton should render correctly', () => {
    const component = shallow(<IconButton icon="Close" label="Close" />);

    expect(component).toMatchSnapshot();
  });

  test('Secondary IconButton should render correctly', () => {
    const component = shallow(<IconButton icon="Close" variant="secondary" label="Close" />);

    expect(component).toMatchSnapshot();
  });
});
