import React from 'react';

import Text from '../Text';
import Image, { ImageProps } from '../Image';

import StyledTeaser from './Teaser.style';

export type TeaserProps = {
  href: string;
  title: string;
  copy: string;
  image?: ImageProps;
  linkText: string;
};

const Teaser = ({ href, title, copy, image, linkText }: TeaserProps) => (
  <StyledTeaser href={href}>
    {image && <Image src={image.src} srcSet={image.srcSet} alt={image.alt} lazy={image.lazy} />}

    <Text as="h2" variant="headline2">
      {title}
    </Text>

    <Text>{copy}</Text>
    <Text>{linkText}</Text>
  </StyledTeaser>
);

Teaser.defaultProps = {
  image: undefined
};

export default Teaser;
