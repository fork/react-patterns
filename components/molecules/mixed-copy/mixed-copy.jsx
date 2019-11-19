import PropTypes from 'prop-types';
import React from 'react';

const MixedCopy = ({ html, className, ...props }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} className={className} {...props} />
);

MixedCopy.propTypes = {
  className: PropTypes.string,
  html: PropTypes.string
};

MixedCopy.defaultProps = {
  className: '',
  html: null
};

export default MixedCopy;
