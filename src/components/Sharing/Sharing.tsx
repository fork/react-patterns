import React from 'react';

import Text from '../Text';
import Icon, { IconTypes } from '../Icon';

import StyledSharing from './Sharing.style';

export type SharingLink = { link: string; icon: IconTypes; label: string };

export type SharingProps = {
  links: SharingLink[];
  className?: string;
};

const Sharing: React.FC<SharingProps> = ({ links, className }: SharingProps) => (
  <StyledSharing className={className}>
    <Text transform="uppercase">Share on</Text>

    {links.map(link => (
      <a
        className="sharing__item"
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        title={link.label}
        aria-label={link.label}
      >
        <Icon icon={link.icon} />
      </a>
    ))}
  </StyledSharing>
);

export default Sharing;
