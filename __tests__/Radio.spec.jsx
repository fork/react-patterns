import React from 'react';
import { shallow } from 'enzyme';

import Radio from '../components/Radio';

const options = [
  {
    value: 'frau',
    label: 'Frau'
  },
  {
    value: 'herr',
    label: 'Herr'
  },
  {
    value: 'divers',
    label: 'Divers'
  }
];

describe('Radio', () => {
  test('Radio should render correctly', () => {
    const component = shallow(<Radio label="Radio Label" options={options} id="1" />);

    expect(component).toMatchSnapshot();
  });

  test('Radio without label should render correctly', () => {
    const component = shallow(<Radio hideLabel label="Radio Label" options={options} id="1" />);

    expect(component).toMatchSnapshot();
  });

  test('Radio with default value should render correctly', () => {
    const component = shallow(
      <Radio hideLabel label="Radio Label" options={options} value="frau" id="1" />
    );

    expect(component).toMatchSnapshot();
  });
});
