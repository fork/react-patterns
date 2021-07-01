/* eslint-disable global-require, import/no-dynamic-require, @typescript-eslint/no-var-requires */
import React from 'react';

import StyledIcon from './Icon.style';

import * as icons from './compiled';

export type IconTypes = keyof typeof icons;

export type IconProps = { icon: IconTypes; size?: 'small' | 'large' };

const Icon = ({ icon, size = 'small' }: IconProps) => {
  const ThisIcon = icons[icon];

  return <StyledIcon as={ThisIcon} size={size} />;
};

export default Icon;
