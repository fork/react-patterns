import PropTypes from 'prop-types';
import React from 'react';

import StyledCheckbox from './Checkbox.style';
import Icon from '../Icon';

const Checkbox = ({
  label,
  id,
  required,
  onChange,
  error,
  errorMessage,
  disabled,
  value,
  hideLabel,
  ...props
}) => (
  <StyledCheckbox error={error} success={required && value} hideLabel={hideLabel}>
    <label htmlFor={id}>
      <input
        id={id}
        name={id}
        type="checkbox"
        onChange={onChange}
        aria-invalid={error}
        disabled={disabled}
        checked={value}
        {...props}
      />
      <span className="checkbox__custom-checkbox">
        <Icon icon="check" />
        {required && <span className="checkbox__required">*</span>}
      </span>
      <span className="checkbox__label">{label}</span>
    </label>
    {error && errorMessage && <span className="checkbox__error">{errorMessage}</span>}
  </StyledCheckbox>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

Checkbox.defaultProps = {
  label: null,
  required: false,
  onChange: null,
  error: false,
  errorMessage: null,
  disabled: false,
  value: false,
  hideLabel: false
};

export default Checkbox;
