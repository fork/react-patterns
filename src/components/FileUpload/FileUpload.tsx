import React, { useState } from 'react';

import StyledFileUpload from './FileUpload.style';

export type FileUploadProps = {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  hideLabel?: boolean;
  id: string;
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
    <StyledFileUpload success={success} error={error} hideLabel={hideLabel} className={className}>
      <label htmlFor={id}>
        {label && (
          <span className="fileUpload__label">
            {label}
            {required && <span className="input__required">*</span>}
          </span>
        )}
        <input
          type="file"
          id={id}
          name={id}
          value={value}
          onBlur={onBlur}
          onChange={ev => {
            handleChange(ev);
            onChange(ev);
          }}
          onFocus={onFocus}
          required={required}
          disabled={disabled}
          multiple={multiple}
          accept={accept}
        />
        <span className="fileUpload__custom">Datei auswählen</span>
      </label>
      <span className="fileUpload__output">{output || 'Keine ausgewählt'}</span>
      {error && errorMessage && (
        <span className="fileUpload__error" role="status">
          {errorMessage}
        </span>
      )}
    </StyledFileUpload>
  );
};

export default FileUpload;
