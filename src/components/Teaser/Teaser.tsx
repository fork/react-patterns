import React from 'react';

import Text from '../Text';
import Image, { ImageProps } from '../Image';

import StyledTeaser from './Teaser.style';

export type TeaserProps = {
  headline: string;
  copy?: string;
  image?: ImageProps;
};

const Teaser = ({ headline, copy, image }: TeaserProps) => (
  <StyledTeaser>
    {image && <Image src={image.src} srcSet={image.srcSet} alt={image.alt} lazy={image.lazy} />}

    <Text as="h2" variant="headline2">
      {headline}
    </Text>

    {copy && <Text>{copy}</Text>}
  </StyledTeaser>
);

Teaser.defaultProps = {
  copy: undefined,
  image: undefined
};

export default Teaser;
