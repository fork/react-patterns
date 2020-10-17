import React, { useState, useEffect, useRef, useCallback } from 'react';

import { arrayToObject, validateEmail } from './helper';

import { FormInputProps } from './FormInput';

import StyledForm from './Form.style';

type FormErrorProps = { label: string; errorMessage?: string }[];

type FormReturnProps = {
  onChange: (e: React.ChangeEvent<any>) => void;
  onFocus: (e: React.FocusEvent<any>) => void;
  data: FormInputProps[];
  success: boolean;
  error?: FormErrorProps;
};

export type FormProps = {
  /**
   * Array with initial input props
   */
  initialFormData: FormInputProps[];
  /**
   * Render props will return onChange, onFocus, formData, formError, formSuccess
   */
  children(props: FormReturnProps): JSX.Element;
  /**
   * Triggers if form validation was successfull
   */
  onSuccess?: (obj: { [key: string]: any }) => void;
  /**
   * Triggers on form validation error
   */
  onError?: (error: FormErrorProps) => void;
  /**
   * Additional className for form element
   */
  className?: string;
};

const Form: React.FC<FormProps> = ({
  initialFormData,
  onSuccess,
  onError,
  children,
  className,
  ...props
}: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<'error' | 'success' | null>(null);
  const [formData, setFormData] = useState<FormInputProps[]>(initialFormData);

  useEffect(() => {
    if (formState === 'success') {
      const successData = arrayToObject(formData, 'id');
      onSuccess(successData);

      formRef.current.reset();
      setFormData(initialFormData);
    } else if (formState === 'error') {
      onError(
        formData
          .filter(item => item.error)
          .map(({ label, errorMessage }) => ({ label, errorMessage }))
      );
    }
  }, [formState]);

  const handleChange = (e: React.ChangeEvent<any>) => {
    if (formState === 'error') setFormState(null);
    let success = false;

    const { value, name, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prev =>
        prev.map(item =>
          item.id === name
            ? {
                ...item,
                error: false,
                value: checked
              }
            : item
        )
      );
    } else {
      if (type === 'email') {
        success = validateEmail(value);
      } else {
        success = value !== '';
      }

      setFormData(prev =>
        prev.map(item =>
          item.id === name
            ? {
                ...item,
                success,
                value
              }
            : item
        )
      );
    }
  };

  const handleFocus = (e: React.FocusEvent<any>) => {
    const { name } = e.target;

    setFormData(prev =>
      prev.map(item =>
        item.id === name
          ? {
              ...item,
              error: false
            }
          : item
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormState(null);

    const inputElements: (
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    )[] = Array.from(formRef.current.querySelectorAll('input, select, textarea'));

    let isValid = true;

    await inputElements.forEach((element: any) => {
      let valid = true;
      let errorMessage = '';

      const obj = formData.filter(item => item.id === element.name);

      if (element.type === 'email') {
        valid = validateEmail(element.value);
        errorMessage = 'Geben sie eine gültige Email ein';
      } else if (element.type === 'checkbox' && obj[0].required) {
        valid = element.checked;
        errorMessage = 'Dieses Feld ist verpflichtend';
      } else if (obj[0] && obj[0].required) {
        valid = element.value !== '' && element.validity.valid;
        errorMessage = element.validity.patternMismatch
          ? 'Der Wert ist im falschen Format'
          : 'Dieses Feld ist verpflichtend';
      }

      if (!valid) {
        setFormData(prev =>
          prev.map(item =>
            item.id === element.name
              ? {
                  ...item,
                  errorMessage,
                  error: true
                }
              : item
          )
        );
      }

      isValid = isValid && valid;
    });

    if (isValid) {
      setFormState('success');
    } else {
      setFormState('error');
    }
  };

  // Memoize functions
  const onChange = useCallback(handleChange, []);
  const onFocus = useCallback(handleFocus, []);

  return (
    <StyledForm className={className} onSubmit={handleSubmit} noValidate ref={formRef} {...props}>
      {children({
        onChange,
        onFocus,
        data: formData,
        error:
          formState === 'error'
            ? formData
                .filter(item => item.error)
                .map(({ label, errorMessage }) => ({ label, errorMessage }))
            : undefined,
        success: formState === 'success'
      })}
    </StyledForm>
  );
};

export default Form;
