import React from 'react';
import { shallow } from 'enzyme';

import Textarea from '../components/basics/Textarea';

describe('Textarea', () => {
  test('Textarea should render correctly', () => {
    const component = shallow(<Textarea label="Textarea Label" id="1" />);

    expect(component).toMatchSnapshot();
  });

  test('Textarea with hidden label should render correctly', () => {
    const component = shallow(<Textarea hideLabel label="Textarea Label" id="1" />);

    expect(component).toMatchSnapshot();
  });

  test('Textarea with default value should render correctly', () => {
    const component = shallow(<Textarea hideLabel label="Textarea Label" value="true" id="1" />);

    expect(component).toMatchSnapshot();
  });
});
