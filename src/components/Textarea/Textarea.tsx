import React from 'react';

import Text from '../Text';

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
  placeholder?: string;
  success?: boolean;
  hideLabel?: boolean;
  autocomplete?: string;
  rows?: number;
};

const Textarea = ({
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
  hideLabel,
  errorMessage
}: TextareaProps) => (
  <StyledTextarea error={error} success={success} hideLabel={hideLabel}>
    <label htmlFor={id}>
      <Text as="span" variant="form-label">
        {label}
        {required && <span className="textarea__required">*</span>}
      </Text>
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

    {error && errorMessage && (
      <div className="textarea__error">
        <Text as="span" variant="copy-small">
          {errorMessage}
        </Text>
      </div>
    )}
  </StyledTextarea>
);

export default Textarea;
