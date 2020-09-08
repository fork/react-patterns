import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton';

import StyledSharing from './Sharing.style';
import Text from '../Text';

const Sharing = ({ links, ...props }) => (
  <StyledSharing {...props}>
    <Text transform="uppercase">Share on</Text>
    {links.map(link => (
      <IconButton
        className="sharing__item"
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        icon={link.icon}
        label={link.label}
      />
    ))}
  </StyledSharing>
);

Sharing.propTypes = {
  links: PropTypes.arrayOf([
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ]).isRequired
};

export default Sharing;
