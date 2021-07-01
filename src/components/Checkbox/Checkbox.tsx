import React from 'react';

import StyledCheckbox from './Checkbox.style';
import Icon from '../Icon';

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
        <Icon icon="check" />

        {required && <span className="checkbox__required">*</span>}
      </span>
      <span className="checkbox__label">{label}</span>
    </label>

    {error && errorMessage && <span className="checkbox__error">{errorMessage}</span>}
  </StyledCheckbox>
);

export default Checkbox;
