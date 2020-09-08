import PropTypes from 'prop-types';
import React from 'react';

import Text from '../Text';

import StyledQuote from './Quote.style';

const Quote = ({ author, quote, ...props }) => (
  <StyledQuote {...props}>
    <Text>{quote}</Text>

    {author && <Text as="cite">{author}</Text>}
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
