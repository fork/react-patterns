import PropTypes from 'prop-types';
import React from 'react';

import StyledInput from './Input.style';

const Input = ({
  autocomplete,
  disabled,
  error,
  errorMessage,
  hideLabel,
  id,
  label,
  onChange,
  pattern,
  placeholder,
  required,
  success,
  type,
  value,
  ...props
}) => (
  <StyledInput disabled={disabled} error={error} success={success} hideLabel={hideLabel} {...props}>
    <label htmlFor={id}>
      <span className="input__labelText">{label}</span>
      {required && <span className="input__required">*</span>}
    </label>

    <div className="input__wrapper">
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={error}
        aria-required={required}
        disabled={disabled}
        pattern={pattern}
        autoComplete={autocomplete}
        value={value}
      />
    </div>
    {error && errorMessage && <span className="input__error">{errorMessage}</span>}
  </StyledInput>
);

Input.propTypes = {
  autocomplete: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  hideLabel: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  /**
   Regex pattern for validation
  */
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  success: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  autocomplete: 'off',
  disabled: false,
  error: false,
  errorMessage: '',
  hideLabel: false,
  onChange: null,
  pattern: null,
  placeholder: '',
  required: false,
  success: false,
  type: 'text',
  value: ''
};

export default Input;
