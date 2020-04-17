import React from 'react';
import PropTypes from 'prop-types';

import StyledTextContainer from './TextContainer.style';

const TextContainer = ({ html, children, className }) => {
  if (html) {
    return <StyledTextContainer className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <StyledTextContainer className={className}>{children}</StyledTextContainer>;
};

TextContainer.propTypes = {
  html: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

TextContainer.defaultProps = {
  html: null,
  children: null,
  className: null
};

export default TextContainer;
