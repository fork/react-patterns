import React from 'react';
import PropTypes from 'prop-types';

import StyledRichtext from './Richtext.style';

const Richtext = ({ html, children, className }) => {
  if (html) {
    return <StyledRichtext className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <StyledRichtext className={className}>{children}</StyledRichtext>;
};

Richtext.propTypes = {
  html: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

Richtext.defaultProps = {
  html: null,
  children: null,
  className: null
};

export default Richtext;
