import React from 'react';

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

export default Radio;
