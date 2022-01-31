import React from 'react';
import AspectRatio from '../AspectRatio';

import Text from '../Text';

import StyledContactPerson from './ContactPerson.style';

export type ContactPersonProps = {
  className?: string;
  title?: string;
  name: string;
  phone?: string;
  email?: string;
  image?: string;
};

const ContactPerson = ({ title, name, image, phone, email, className }: ContactPersonProps) => (
  <StyledContactPerson className={className}>
    {image && (
      <div className="contact-person__image">
        <AspectRatio ratio="1:1">
          <img src={image} alt={name} />
        </AspectRatio>
      </div>
    )}

    <div className="contact-person__content">
      {title && <Text>{title}</Text>}
      <Text as="h3" variant="headline4">
        {name}
      </Text>

      {(email || phone) && (
        <div className="contact-person__contact">
          {email && (
            <a href={`mailto:${email}`} className="contact-person__email">
              <Text as="span">{email}</Text>
            </a>
          )}

          {phone && (
            <a href={`tel:${phone}`} className="contact-person__phone">
              <Text as="span">{phone}</Text>
            </a>
          )}
        </div>
      )}
    </div>
  </StyledContactPerson>
);

export default ContactPerson;
