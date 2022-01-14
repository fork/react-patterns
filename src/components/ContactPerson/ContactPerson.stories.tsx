import React from 'react';
import { Story } from '@storybook/react';

import ContactPerson, { ContactPersonProps } from './ContactPerson';
import docs from './docs.mdx';

export default {
  title: 'Components/Content/ContactPerson',
  component: ContactPerson,
  parameters: {
    docs: {
      page: docs
    }
  }
};

const defaultData = {
  name: 'Lotta Trouble',
  title: 'CEO',
  image: 'https://randomuser.me/api/portraits/',
  phone: '+1 (917) 593-3246',
  email: 'lotta.trouble@ceo.com'
};

const Template: Story<ContactPersonProps> = args => <ContactPerson {...args} />;

export const Default = Template.bind({});
Default.args = defaultData;
