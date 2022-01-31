import React from 'react';

import Text from '../Text';
import StyledInput from './Input.style';

export type InputProps = {
  autocomplete?: string;
  className?: string;
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
   * Regex pattern for validation
   */
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  success?: boolean;
  type?: string;
  value?: string;
  list?: { id: string; options: string[] };
  /**
   * Pass additional children to input wrapper
   * e.g. show password button, clear button
   */
  children?: React.ReactNode;
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
  className,
  pattern,
  placeholder,
  required,
  success,
  type = 'text',
  value,
  children,
  list
}: InputProps) => (
  <StyledInput error={error} success={success} hideLabel={hideLabel} className={className}>
    <label htmlFor={id}>
      <Text as="span" variant="form-label">
        {label}
        {required && <span className="input__required">*</span>}
      </Text>
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

      {children}
    </div>

    {error && errorMessage && (
      <div className="input__error">
        <Text as="span" variant="copy-small">
          {errorMessage}
        </Text>
      </div>
    )}
  </StyledInput>
);

export default Input;
