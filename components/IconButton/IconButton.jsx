import React from 'react';
import PropTypes from 'prop-types';

import StyledIconButton from './IconButton.style';

import Icon from '../Icon';

const IconButton = ({ href, icon, size, disabled, className, label, ...props }) => (
  <StyledIconButton
    as={href ? 'a' : 'button'}
    type={href ? undefined : 'button'}
    className={className}
    disabled={disabled}
    aria-disabled={disabled}
    title={label}
    aria-label={label}
    size={size}
    {...props}
  >
    <Icon icon={icon} size={size} />
  </StyledIconButton>
);

IconButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  /**
   * Accessibility label
   */
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'large']),
  icon: PropTypes.string.isRequired,
  /**
   * Defines the tag of the component. 'a' or 'button'.
   */
  href: PropTypes.string
};

IconButton.defaultProps = {
  className: null,
  children: null,
  disabled: false,
  size: 'small',
  variant: 'primary',
  href: null
};

export default IconButton;
