import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/basics/Button/Button';

describe('Button', () => {
  test('Button should render correctly', () => {
    const component = shallow(<Button>Primary Button</Button>);

    expect(component).toMatchSnapshot();
  });
});
