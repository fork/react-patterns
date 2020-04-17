import React from 'react';

import Form, { FormInput } from './Form';
import Button from '../../basics/Button';

export default {
  title: 'Elements/Form',
  component: Form
};

export const form = () => {
  const initialFormData = [
    {
      fieldType: 'select',
      value: '',
      placeholder: 'Select',
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
      required: true,
      label: 'Full name'
    },
    {
      fieldType: 'textarea',
      value: '',
      id: 'message',
      required: true,
      label: 'Message'
    },
    {
      fieldType: 'checkbox',
      value: false,
      id: 'dataPrivacy',
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
          {data.map(item => (
            <FormInput key={item.id} onChange={onChange} onFocus={onFocus} {...item} />
          ))}
          <Button type="submit" variant="secondary" mt={1}>
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
