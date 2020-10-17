import React from 'react';

import DateIcon from './icons/date.svg';
import Icon from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon
};

export const withString: React.FC = () => (
  <>
    <Icon icon="date" size="large" />
    <Icon icon="date" />
  </>
);
export const withObject: React.FC = () => (
  <>
    <Icon icon={DateIcon} size="large" />
    <Icon icon={DateIcon} />
  </>
);
