import React, { useState } from 'react';

import Text from '../Text';
import Icon from '../Icon';

import StyledFileUpload from './FileUpload.style';

export type FileUploadProps = {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  hideLabel?: boolean;
  id: string;
  placeholder?: string;
  label: string;
  multiple?: boolean;
  onBlur?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  accept?: string;
  required?: boolean;
  success?: boolean;
  value?: string;
};

const FileUpload = ({
  accept,
  disabled,
  error,
  errorMessage,
  hideLabel,
  id,
  placeholder,
  label,
  multiple,
  onBlur,
  onChange,
  onFocus,
  className,
  required,
  success,
  value
}: FileUploadProps) => {
  const [output, setOutput] = useState(null);
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = ev.target;
    const fileNames = [];
    if (ev.target.files.length > 0) {
      for (let i = 0; i < files.length; i += 1) {
        const file = files[i];
        fileNames.push(file.name);
      }
      setOutput(fileNames.join(', '));
    } else {
      setOutput(null);
    }
  };

  return (
    <StyledFileUpload
      success={success}
      error={error}
      hideLabel={hideLabel}
      className={className}
      output={output}
    >
      <label htmlFor={id}>
        {label && (
          <div className="fileUpload__label">
            <Text as="span" variant="form-label">
              {label}
              {required && <span className="input__required">*</span>}
            </Text>
          </div>
        )}
        <input
          type="file"
          id={id}
          name={id}
          value={value}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          multiple={multiple}
          accept={accept}
          onBlur={onBlur}
          onChange={ev => {
            handleChange(ev);
            onChange(ev);
          }}
          onFocus={onFocus}
        />
        <span className="fileUpload__custom">
          <span className="fileUpload__output">
            <Text as="span" variant="copy-small">
              {output || placeholder}
            </Text>
          </span>
          <Icon icon="Upload" />
        </span>
      </label>

      {error && errorMessage && (
        <small className="fileUpload__error" role="status">
          <Text as="span" variant="copy-small">
            {errorMessage}
          </Text>
        </small>
      )}
    </StyledFileUpload>
  );
};

export default FileUpload;
