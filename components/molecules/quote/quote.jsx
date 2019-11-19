import PropTypes from 'prop-types';
import React from 'react';

import Copy from '../../atoms/copy/copy';

const Quote = ({ author, quote, ...props }) => (
  <blockquote {...props}>
    <Copy bold className="quote__content">
      {quote}
    </Copy>

    {author && (
      <Copy tag="cite" italic className="quote__author">
        {author}
      </Copy>
    )}
  </blockquote>
);

Quote.propTypes = {
  author: PropTypes.string,
  quote: PropTypes.string.isRequired
};

Quote.defaultProps = {
  author: null
};

export default Quote;
