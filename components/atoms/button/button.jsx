import PropTypes from 'prop-types';
import React from 'react';

const Button = React.forwardRef(({ children, type, disabled, ...props }, ref) => (
  // eslint-disable-next-line react/button-has-type
  <button ref={ref} type={type} disabled={disabled} {...props}>
    {children}
  </button>
));

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'button', 'reset'])
};

Button.defaultProps = {
  children: null,
  disabled: false,
  type: 'button'
};

export default Button;
