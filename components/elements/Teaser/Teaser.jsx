import PropTypes from 'prop-types';
import React from 'react';

import Text from '../../basics/Text';
import Image from '../../basics/Image';

import StyledTeaser from './Teaser.style';

const Teaser = ({ headline, copy, image }) => (
  <StyledTeaser>
    {image && (
      <Image src={image.src} srcset={image.srcset} alt={image.alt} ratio={image.ratio} lazy />
    )}
    <Text as="h2">{headline}</Text>
    {copy && <Text>{copy}</Text>}
  </StyledTeaser>
);

Teaser.propTypes = {
  headline: PropTypes.string.isRequired,
  copy: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    srcset: PropTypes.string,
    alt: PropTypes.string,
    ratio: PropTypes.string
  })
};

Teaser.defaultProps = {
  copy: null,
  image: null
};

export default Teaser;
