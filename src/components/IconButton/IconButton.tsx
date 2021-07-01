import React from 'react';

import StyledIconButton from './IconButton.style';

import Icon, { IconTypes } from '../Icon';

export type IconButtonProps = {
  icon: IconTypes;
  size?: 'small' | 'large';
  variant?: 'primary' | 'secondary';
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const IconButton = ({
  icon,
  size = 'small',
  disabled,
  className,
  variant = 'primary',
  onClick,
  label
}: IconButtonProps) => (
  <StyledIconButton
    type="button"
    className={className}
    disabled={disabled}
    aria-disabled={disabled}
    title={label}
    aria-label={label}
    variant={variant}
    onClick={onClick}
    size={size}
  >
    <Icon icon={icon} size={size} />
  </StyledIconButton>
);

export default IconButton;
