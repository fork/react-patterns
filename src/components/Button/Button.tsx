import React from 'react';

import Icon, { IconTypes } from '../Icon';
import Text from '../Text';

import StyledButton from './Button.style';

export type ButtonProps = {
  label: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  icon?: IconTypes;
  iconPosition?: 'before' | 'after' | 'only';
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
  label,
  type = 'button',
  disabled,
  variant = 'primary',
  size = 'small',
  onClick,
  iconPosition = 'before',
  icon
}: ButtonProps) => (
  <StyledButton
    type={type}
    disabled={disabled}
    aria-disabled={disabled}
    title={label}
    aria-label={label}
    variant={variant}
    size={size}
    onClick={onClick}
    iconPosition={iconPosition}
  >
    {icon && <Icon icon={icon} />}
    {iconPosition === 'only' && icon ? null : <Text variant="copy">{label}</Text>}
  </StyledButton>
);

export default Button;
