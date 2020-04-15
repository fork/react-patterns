import PropTypes from 'prop-types';
import React from 'react';

import StyledSelect from './Select.style';
import Icon from '../Icon';

const Select = ({
  defaultValue,
  disabled,
  error,
  hideLabel,
  id,
  label,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  required,
  success,
  ...props
}) => (
  <StyledSelect
    disabled={disabled}
    error={error}
    success={success}
    hideLabel={hideLabel}
    {...props}
  >
    <label htmlFor={id}>
      {label}
      {required && <span className="select__required">*</span>}
    </label>

    <div className="select__wrapper">
      <select
        id={id}
        name={id}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        aria-invalid={error}
        aria-required={required}
        required={required}
        disabled={disabled}
        defaultValue={placeholder ? '' : defaultValue}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon icon="angleDown" />
    </div>
  </StyledSelect>
);
Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string
};

Select.defaultProps = {
  defaultValue: '',
  disabled: false,
  error: false,
  hideLabel: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  options: [],
  placeholder: null,
  required: false,
  success: false
};

export default Select;
