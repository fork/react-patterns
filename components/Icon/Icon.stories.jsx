import React from 'react';

import DateIcon from './icons/date.svg';
import Icon from './Icon';

export default {
  title: 'Icon',
  component: Icon
};

export const withString = () => (
  <>
    <Icon icon="date" size="large" />
    <Icon icon="date" />
  </>
);
export const withObject = () => (
  <>
    <Icon icon={DateIcon} size="large" />
    <Icon icon={DateIcon} />
  </>
);
