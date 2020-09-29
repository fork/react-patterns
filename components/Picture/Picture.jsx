import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import { buildSrcSet, buildImageObject } from '../Image/helper';

import StyledPicture from './Picture.style';

export const PictureSource = ({ media, srcSet, sizes, lazy }) => {
  const { image } = buildImageObject(
    {
      sizes: null,
      src: null,
      srcSet: srcSet ? buildSrcSet(srcSet) : null
    },
    lazy
  );

  return <source media={media} sizes={sizes} {...image} />;
};

PictureSource.propTypes = {
  srcSet: PropTypes.shape(),
  sizes: PropTypes.string,
  lazy: PropTypes.bool,
  media: PropTypes.string
};

PictureSource.defaultProps = {
  sizes: null,
  srcSet: null,
  lazy: false,
  media: null
};

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
