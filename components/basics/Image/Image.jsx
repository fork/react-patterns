import React from 'react';
import PropTypes from 'prop-types';

import AspectRatio from '../../layouts/AspectRatio/AspectRatio';

import { buildSrcSet, buildImageObject } from './helper';

import StyledImage from './Image.styled';

const Image = ({ alt, src, srcset, sizes, lazy, ratio, className }) => {
  const { image, imageClass } = buildImageObject(
    {
      alt,
      role: !alt ? 'presentation' : 'image',
      sizes,
      src,
      srcSet: srcset ? buildSrcSet(srcset) : undefined
    },
    lazy
  );

  if (ratio) {
    return (
      <AspectRatio ratio={ratio} className={className || ''}>
        <StyledImage className={imageClass} {...image} />
      </AspectRatio>
    );
  }

  return <StyledImage className={`${className} ${imageClass}`} {...image} />;
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  /**
   * srcset object, e.g. { 300vw: "path/to/image", 400vw: "path/to/image" }
   */
  srcset: PropTypes.shape(),
  sizes: PropTypes.string,
  /**
   * Defines if image should lazy load
   */
  lazy: PropTypes.bool,
  /**
   * Add ratio (e.g. 16:9) to avoid unintended jumping while image loading
   */
  ratio: PropTypes.string,
  className: PropTypes.string
};

Image.defaultProps = {
  alt: null,
  sizes: null,
  srcset: null,
  lazy: false,
  ratio: null,
  className: null
};

export default Image;
