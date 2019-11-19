import PropTypes from 'prop-types';
import React from 'react';

const Headline = ({ tag, children, ...props }) => {
  const Tag = tag;
  return <Tag {...props}>{children}</Tag>;
};

Headline.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'])
};

Headline.defaultProps = {
  children: '',
  tag: 'h2'
};

export default Headline;
