import React from 'react';

import Icon from '../Icon';
import Text from '../Text';

import StyledSelect from './Select.style';

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  id: string;
  label: string;
  onChange?: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (ev: React.FocusEvent<HTMLSelectElement>) => void;
  onFocus?: (ev: React.FocusEvent<HTMLSelectElement>) => void;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  options: SelectOption[];
  hideLabel?: boolean;
  success?: boolean;
};

const Select = ({
  defaultValue,
  disabled,
  error,
  errorMessage,
  hideLabel,
  id,
  label,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  required,
  success
}: SelectProps) => (
  <StyledSelect error={error} success={success} hideLabel={hideLabel}>
    <label htmlFor={id}>
      <Text as="span" variant="form-label">
        {label}
        {required && <span className="select__required">*</span>}
      </Text>
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
        defaultValue={defaultValue || ''}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon icon="Expand" />
    </div>

    {error && errorMessage && (
      <small className="select__error" role="status">
        <Text as="span" variant="copy-small">
          {errorMessage}
        </Text>
      </small>
    )}
  </StyledSelect>
);

export default Select;
