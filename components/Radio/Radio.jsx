import PropTypes from 'prop-types';
import React from 'react';

import StyledRadio from './Radio.style';

const Radio = ({
  disabled,
  error,
  errorMessage,
  id,
  label,
  onChange,
  required,
  value,
  options,
  hideLabel,
  ...props
}) => (
  <StyledRadio disabled={disabled} error={error} hideLabel={hideLabel} {...props}>
    <p className="radio__label">
      {label}
      {required && <span className="radio__required">*</span>}
    </p>
    {options.map(option => (
      <div className="radio__item" key={option.value}>
        <input
          id={option.value}
          value={option.value}
          name={id}
          type="radio"
          onChange={onChange}
          disabled={disabled}
          required={required}
          checked={value === option.value}
        />
        <label htmlFor={option.value}>
          <span className={`radio__custom-icon ${value === option.value ? 'checked' : ''}`} />
          {option.label}
        </label>
      </div>
    ))}
    {error && errorMessage && <span className="radio__error">{errorMessage}</span>}
  </StyledRadio>
);

Radio.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  hideLabel: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};

Radio.defaultProps = {
  disabled: false,
  error: false,
  errorMessage: '',
  hideLabel: false,
  onChange: () => {},
  required: false,
  value: ''
};

export default Radio;
