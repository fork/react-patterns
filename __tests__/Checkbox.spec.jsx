import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../components/Checkbox';

describe('Checkbox', () => {
  test('Checkbox should render correctly', () => {
    const component = shallow(<Checkbox label="Checkbox Label" id="1" />);

    expect(component).toMatchSnapshot();
  });

  test('Checkbox without label should render correctly', () => {
    const component = shallow(<Checkbox hideLabel id="1" />);

    expect(component).toMatchSnapshot();
  });

  test('Checkbox with default value should render correctly', () => {
    const component = shallow(<Checkbox hideLabel value="true" id="1" />);

    expect(component).toMatchSnapshot();
  });
});
