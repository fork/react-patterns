import React from 'react';

import Radio, { RadioOption, RadioProps } from '../Radio/Radio';
import Input, { InputProps } from '../Input/Input';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';
import Select, { SelectProps, SelectOption } from '../Select/Select';
import Textarea, { TextareaProps } from '../Textarea/Textarea';
import FileUpload, { FileUploadProps } from '../FileUpload/FileUpload';

export type FormInputProps = {
  fieldType: string;
  name?: string;
  id?: string;
  label?: string;
  options?: SelectOption[] | RadioOption[];
  [key: string]: any;
};

const FormInput = ({ fieldType, ...rest }: FormInputProps) => {
  switch (fieldType) {
    case 'input':
      return <Input {...(rest as InputProps)} />;
    case 'select':
      return <Select {...(rest as SelectProps)} />;
    case 'checkbox':
      return <Checkbox {...(rest as CheckboxProps)} />;
    case 'radio':
      return <Radio {...(rest as RadioProps)} />;
    case 'textarea':
      return <Textarea {...(rest as TextareaProps)} />;
    case 'fileUpload':
      return <FileUpload {...(rest as FileUploadProps)} />;
    default:
      return <Input {...(rest as InputProps)} />;
  }
};

export default FormInput;
