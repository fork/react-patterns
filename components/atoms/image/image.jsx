import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ alt, title, src, srcset, sizes, lazy, className }) => {
  let image = {
    alt: alt || title,
    sizes,
    srcSet: srcset
  };

  if (lazy) {
    image = {
      ...image,
      'data-src': src
    };
  } else {
    image = {
      ...image,
      src
    };
  }
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img className={`${className} ${lazy ? 'lazyload' : ''}`} {...image} />;
};

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
  srcset: PropTypes.string,
  sizes: PropTypes.string,
  lazy: PropTypes.bool
};

Image.defaultProps = {
  className: '',
  alt: null,
  title: null,
  src: null,
  srcset: null,
  sizes: null,
  lazy: false
};

export default Image;
