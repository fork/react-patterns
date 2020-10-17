import React from 'react';

import Text from '../Text';
import Image, { ImageProps } from '../Image';

import StyledTeaser from './Teaser.style';

type TeaserProps = {
  headline: string;
  copy?: string;
  image?: ImageProps;
};

const Teaser: React.FC<TeaserProps> = ({ headline, copy, image }: TeaserProps) => (
  <StyledTeaser>
    {image && (
      <Image
        src={image.src}
        srcset={image.srcset}
        alt={image.alt}
        ratio={image.ratio}
        lazy={image.lazy}
      />
    )}

    <Text as="h2">{headline}</Text>

    {copy && <Text>{copy}</Text>}
  </StyledTeaser>
);

Teaser.defaultProps = {
  copy: 'Teaser',
  image: { src: '' }
};

export default Teaser;
