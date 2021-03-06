import React from 'react';
import { shallow } from 'enzyme';

import Button from '../src/components/Button';

describe('Button', () => {
  test('Button should render correctly', () => {
    const component = shallow(<Button>Primary Button</Button>);

    expect(component).toMatchSnapshot();
  });

  test('Secondary Button should render correctly', () => {
    const component = shallow(<Button variant="secondary">Secondary Button</Button>);

    expect(component).toMatchSnapshot();
  });
});
