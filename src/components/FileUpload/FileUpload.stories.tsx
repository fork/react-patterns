import React from 'react';
import { Story, Meta } from '@storybook/react';

import FileUpload, { FileUploadProps } from './FileUpload';
import docs from './docs.mdx';

export default {
  title: 'Components/Input/FileUpload',
  component: FileUpload,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const defaults = {
  id: 'file-upload',
  label: 'File Upload',
  placeholder: 'Laden Sie hier ihre Datei hoch',
  required: true,
  multiple: false,
  error: false,
  success: false,
  disabled: false,
  errorMessage: 'Dies ist ein Pflichtfeld',
  onChange: () => console.log('Change'),
  onFocus: () => console.log('Focus'),
  onBlur: () => console.log('Blur')
};

const Template: Story<FileUploadProps> = args => <FileUpload {...args} />;

export const WithoutValue = Template.bind({});
WithoutValue.args = { ...defaults };

export const Multiple = Template.bind({});
Multiple.args = {
  ...defaults,
  multiple: true,
  required: false
};

export const Error = Template.bind({});
Error.args = { ...defaults, error: true };

export const Disabled = Template.bind({});
Disabled.args = { ...defaults, disabled: true };
