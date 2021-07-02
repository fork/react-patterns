import React from 'react';

import Icon, { IconTypes } from '../Icon';
import Text from '../Text';

import StyledLink from './Link.style';

export type LinkProps = {
  label: string;
  href: string;
  className?: string;
  target?: '_blank' | '_self';
  icon?: IconTypes;
};

const Link = ({ label, href, target, icon, className }: LinkProps) => (
  <StyledLink title={label} aria-label={label} href={href} className={className} target={target}>
    {icon && <Icon icon={icon} />}

    <Text variant="link" as="span">
      {label}
    </Text>
  </StyledLink>
);

export default Link;
