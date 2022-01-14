import React from 'react';

import Text from '../Text';

import StyledQuote from './Quote.style';

export type QuoteProps = { author?: string; quote: string; className?: string };

const Quote = ({ author, quote, className }: QuoteProps) => (
  <StyledQuote className={className}>
    <Text variant="quote">{quote}</Text>

    {author && <Text as="cite">{author}</Text>}
  </StyledQuote>
);

export default Quote;
