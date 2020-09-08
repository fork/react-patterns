import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import Radio from '../Radio';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Select from '../Select';
import Textarea from '../Textarea';

import StyledForm from './Form.style';

export const validateEmail = value =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

export const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    const newObj = obj;
    newObj[item[keyField]] = item.value;
    return newObj;
  }, {});

export const FormInput = props => {
  const { fieldType, ...rest } = props;

  switch (fieldType) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'radio':
      return <Radio {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    default:
      return <Input {...rest} />;
  }
};

FormInput.propTypes = {
  fieldType: PropTypes.string
};

FormInput.defaultProps = {
  fieldType: ''
};

const Form = ({ initialFormData, onSuccess, onError, children, className, ...props }) => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

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

  const handleChange = e => {
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

  const handleFocus = e => {
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

  const handleSubmit = async e => {
    e.preventDefault();

    setFormState(null);

    const inputElements = Array.from(formRef.current.querySelectorAll('input, select, textarea'));

    let isValid = true;

    await inputElements.forEach(element => {
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
            : false,
        success: formState === 'success'
      })}
    </StyledForm>
  );
};

Form.propTypes = {
  /**
   * Array with initial input props
   */
  initialFormData: PropTypes.arrayOf(
    PropTypes.shape({
      fieldType: PropTypes.oneOf(['input', 'radio', 'checkbox', 'textarea', 'select'])
    })
  ).isRequired,
  /**
   * Render props will return onChange, onFocus, formData, formError, formSuccess
   */
  children: PropTypes.func,
  /**
   * Triggers if form validation was successfull
   */
  onSuccess: PropTypes.func,
  /**
   * Triggers on form validation error
   */
  onError: PropTypes.func,
  /**
   * Additional className for form element
   */
  className: PropTypes.string
};

Form.defaultProps = {
  children: () => {},
  onSuccess: () => {},
  onError: () => {},
  className: null
};

export default Form;
