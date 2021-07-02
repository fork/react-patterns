import React from 'react';

import Form from './Form';
import docs from './docs.mdx';
import FormInput, { FormInputProps } from './FormInput';
import Button from '../Button';

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const form = () => {
  const initialFormData: FormInputProps[] = [
    {
      fieldType: 'select',
      value: '',
      placeholder: 'Select',
      name: 'subject',
      id: 'subject',
      label: 'Betreff',
      required: true,
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ]
    },
    {
      fieldType: 'radio',
      value: 'Mr.',
      id: 'salutation',
      name: 'salutation',
      label: 'Anrede',
      required: true,
      options: [
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'None', value: 'None' }
      ]
    },
    {
      fieldType: 'input',
      value: '',
      id: 'fullName',
      name: 'fullName',
      required: true,
      label: 'Full name'
    },
    {
      fieldType: 'textarea',
      value: '',
      id: 'message',
      name: 'message',
      required: true,
      label: 'Message'
    },
    {
      fieldType: 'checkbox',
      value: false,
      id: 'dataPrivacy',
      name: 'dataPrivacy',
      required: true,
      label: 'Data Privacy und so'
    }
  ];

  return (
    <Form
      onSuccess={data => console.log('success', data)}
      onError={data => console.log('Error', data)}
      initialFormData={initialFormData}
    >
      {({ onChange, onFocus, data, error, success }) => (
        <div>
          {data.map((item: FormInputProps) => (
            <FormInput key={item.id} onChange={onChange} onFocus={onFocus} {...item} />
          ))}
          <Button type="submit" variant="secondary">
            Submit
          </Button>

          <div>
            {error && (
              <>
                <p>{error.length} Errors</p>
                {error.map(item => (
                  <p key={item.label}>
                    {item.label}: {item.errorMessage}
                  </p>
                ))}
              </>
            )}

            {success && <p>Success</p>}
          </div>
        </div>
      )}
    </Form>
  );
};
