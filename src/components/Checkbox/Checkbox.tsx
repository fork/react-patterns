import React from 'react';

import StyledCheckbox from './Checkbox.style';
import Icon from '../Icon';
import Text from '../Text';

export type CheckboxProps = {
  label: string;
  id: string;
  required?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  checked?: boolean;
  hideLabel?: boolean;
};

const Checkbox = ({
  label,
  id,
  required,
  onChange,
  error,
  errorMessage,
  disabled,
  checked,
  hideLabel
}: CheckboxProps) => (
  <StyledCheckbox error={error} success={required && checked} hideLabel={hideLabel}>
    <label htmlFor={id}>
      <input
        id={id}
        name={id}
        type="checkbox"
        onChange={onChange}
        aria-invalid={error}
        disabled={disabled}
        checked={checked}
      />

      <span className="checkbox__custom-checkbox">
        <Icon icon="Checkmark" />
        {required && <span className="checkbox__required">*</span>}
      </span>
      <span className="checkbox__label">
        <Text as="span" variant="form-value">
          {label}
        </Text>
      </span>
    </label>

    {error && errorMessage && (
      <small className="checkbox__error" role="status">
        <Text as="span" variant="copy-small">
          {errorMessage}
        </Text>
      </small>
    )}
  </StyledCheckbox>
);

export default Checkbox;
