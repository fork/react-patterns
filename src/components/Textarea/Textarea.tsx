import React from 'react';

import StyledTextarea from './Textarea.style';

export type TextareaProps = {
  label: string;
  id: string;
  required?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (ev: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (ev: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  value?: string;
  hideLabel?: boolean;
  placeholder?: string;
  success?: boolean;
  autocomplete?: string;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  value,
  required,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  error,
  success,
  disabled,
  autocomplete,
  rows,
  errorMessage
}: TextareaProps) => (
  <StyledTextarea error={error} success={success}>
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
      onFocus={onFocus}
      onBlur={onBlur}
      aria-invalid={error}
      aria-required={required}
      required={required}
      disabled={disabled}
      autoComplete={autocomplete}
      rows={rows}
    />

    {error && errorMessage && <span className="textarea__error">{errorMessage}</span>}
  </StyledTextarea>
);

export default Textarea;
