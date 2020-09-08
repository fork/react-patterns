import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import StyledPicture from './Picture.style';

const Picture = ({ src, alt, children, lazy, ...props }) => (
  <StyledPicture {...props}>
    {children}
    <Image src={src} alt={alt} lazy={lazy} />
  </StyledPicture>
);

Picture.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  lazy: PropTypes.bool
};

Picture.defaultProps = {
  children: null,
  alt: '',
  lazy: false
};

export default Picture;
