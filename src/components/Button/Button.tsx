import React, { ReactNode } from 'react';

import StyledButton from './Button.style';

export type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  disabled,
  variant = 'primary',
  size = 'small',
  onClick
}: ButtonProps) => (
  <StyledButton type={type} disabled={disabled} variant={variant} size={size} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
