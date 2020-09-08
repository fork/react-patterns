import React from 'react';
import { shallow } from 'enzyme';

import Input from '../components/Input';

describe('Input', () => {
  test('Input should render correctly', () => {
    const component = shallow(<Input label="Input Label" id="1" />);

    expect(component).toMatchSnapshot();
  });

  test('Input with hidden label should render correctly', () => {
    const component = shallow(<Input hideLabel label="Input Label" id="1" />);

    expect(component).toMatchSnapshot();
  });

  test('Input with default value should render correctly', () => {
    const component = shallow(<Input hideLabel label="Input Label" value="true" id="1" />);

    expect(component).toMatchSnapshot();
  });
});
