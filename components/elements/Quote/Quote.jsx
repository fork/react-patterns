import PropTypes from 'prop-types';
import React from 'react';

import StyledQuote from './Quote.style';

const Quote = ({ author, quote, ...props }) => (
  <StyledQuote {...props}>
    <p>{quote}</p>

    {author && <cite>{author}</cite>}
  </StyledQuote>
);

Quote.propTypes = {
  author: PropTypes.string,
  quote: PropTypes.string.isRequired
};

Quote.defaultProps = {
  author: null
};

export default Quote;
