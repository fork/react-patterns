import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.style';

const Button = ({ children, type, disabled, variant, size, href, ...props }) => (
  <StyledButton
    as={href ? 'a' : 'button'}
    href={href}
    type={href ? null : type}
    disabled={disabled}
    variant={variant}
    size={size}
    {...props}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'large']),
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  /**
   * Defines the tag of the component. 'a' or 'button'.
   */
  href: PropTypes.string
};

Button.defaultProps = {
  children: null,
  disabled: false,
  type: 'button',
  size: 'small',
  variant: 'primary',
  href: null
};

export default Button;
