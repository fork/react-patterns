import PropTypes from 'prop-types';
import React from 'react';

const Copy = ({ tag, children, bold, italic, ...props }) => {
  const Tag = tag;
  return (
    <Tag {...props} as={tag} bold={bold} italic={italic}>
      {children}
    </Tag>
  );
};

Copy.propTypes = {
  children: PropTypes.node,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  tag: PropTypes.oneOf(['span', 'p', 'a', 'cite', 'figcaption', 'time'])
};

Copy.defaultProps = {
  children: null,
  bold: false,
  italic: false,
  tag: 'p'
};

export default Copy;
