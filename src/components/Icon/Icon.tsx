/* eslint-disable global-require, import/no-dynamic-require */
import React from 'react';

import StyledIcon from './Icon.style';

export type IconTypes =
  | 'angleDown'
  | 'check'
  | 'close'
  | 'date'
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'whatsApp';

export type IconProps = { icon: IconTypes; size?: 'small' | 'large' };

const Icon: React.FC<IconProps> = ({ icon, size = 'small' }: IconProps) => {
  const updatedIcon = typeof icon === 'object' ? icon : require(`./icons/${icon}.svg`).default;

  return (
    <StyledIcon size={size} viewBox={updatedIcon.viewBox} role="presentation">
      <use xlinkHref={`#${updatedIcon.id}`} />
    </StyledIcon>
  );
};

export default Icon;
