import React from 'react';

import StyledInput from './Input.style';

export type InputProps = {
  autocomplete?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  hideLabel?: boolean;
  id: string;
  label: string;
  onBlur?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  /**
   Regex pattern for validation
  */
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  success?: boolean;
  type?: string;
  value?: string;
  list?: { id: string; options: string[] };
};

const Input = ({
  autocomplete,
  disabled,
  error,
  errorMessage,
  hideLabel,
  id,
  label,
  onBlur,
  onChange,
  onFocus,
  pattern,
  placeholder,
  required,
  success,
  type = 'text',
  value,
  list
}: InputProps) => (
  <StyledInput error={error} success={success} hideLabel={hideLabel}>
    <label htmlFor={id}>
      <span className="input__labelText">{label}</span>
      {required && <span className="input__required">*</span>}
    </label>

    <div className="input__wrapper">
      <input
        id={id}
        list={list ? list.id : undefined}
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-invalid={error}
        aria-required={required}
        disabled={disabled}
        pattern={pattern}
        autoComplete={autocomplete}
        value={value}
      />

      {list && (
        <datalist id={list.id}>
          {list.options.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </datalist>
      )}
    </div>

    {error && errorMessage && <span className="input__error">{errorMessage}</span>}
  </StyledInput>
);

export default Input;
