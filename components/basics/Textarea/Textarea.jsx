import PropTypes from 'prop-types';
import React from 'react';
import StyledTextarea from './Textarea.style';

const Textarea = ({
  id,
  label,
  value,
  required,
  placeholder,
  onChange,
  error,
  success,
  disabled,
  autocomplete,
  rows,
  errorMessage,
  ...props
}) => (
  <StyledTextarea disabled={disabled} error={error} success={success} {...props}>
    <label htmlFor={id}>
      <span className="textarea__labelText">{label}</span>
      {required && <span className="textarea__required">*</span>}
    </label>

    <textarea
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      aria-invalid={error}
      aria-required={required}
      required={required}
      disabled={disabled}
      autoComplete={autocomplete}
      rows={rows}
      {...props}
    />

    {error && errorMessage && <span className="textarea__error">{errorMessage}</span>}
  </StyledTextarea>
);

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  autocomplete: PropTypes.string,
  errorMessage: PropTypes.string
};

Textarea.defaultProps = {
  placeholder: '',
  value: '',
  required: false,
  onChange: null,
  error: false,
  success: false,
  disabled: false,
  rows: 4,
  autocomplete: 'off',
  errorMessage: null
};

export default Textarea;
