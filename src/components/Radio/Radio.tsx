import React from 'react';

import Text from '../Text';

import StyledRadio from './Radio.style';

export type RadioOption = {
  value: string;
  label: string;
};

export type RadioProps = {
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  id: string;
  label: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value?: string;
  options: RadioOption[];
  hideLabel?: boolean;
};

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
  hideLabel
}: RadioProps) => (
  <StyledRadio error={error} hideLabel={hideLabel}>
    <p className="radio__label">
      <Text as="span" variant="form-label">
        {label}
        {required && <span className="radio__required">*</span>}
      </Text>
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
          <Text as="span" variant="form-value">
            {option.label}
          </Text>
        </label>
      </div>
    ))}

    {error && errorMessage && (
      <div className="radio__error">
        <Text as="span" variant="copy-small">
          {errorMessage}
        </Text>
      </div>
    )}
  </StyledRadio>
);

export default Radio;
