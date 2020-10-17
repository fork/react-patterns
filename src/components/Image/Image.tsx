import React from 'react';

import AspectRatio from '../AspectRatio/AspectRatio';

import { buildSrcSet, buildImageObject } from './helper';

import StyledImage from './Image.style';

export type ImageProps = {
  alt?: string;
  src: string;
  /**
   * srcset object, e.g. { 300vw: "path/to/image", 400vw: "path/to/image" }
   */
  srcset?: { [key: string]: string };
  sizes?: string;
  /**
   * Defines if image should lazy load
   */
  lazy?: boolean;
  /**
   * Add ratio (e.g. 16:9) to avoid unintended jumping while image loading
   */
  ratio?: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({
  alt,
  src,
  srcset,
  sizes,
  lazy = false,
  ratio,
  className
}: ImageProps) => {
  const { image, imageClass } = buildImageObject(
    {
      alt,
      role: !alt ? 'presentation' : undefined,
      sizes,
      src,
      srcSet: srcset ? buildSrcSet(srcset) : undefined
    },
    lazy
  );

  if (ratio) {
    return (
      <AspectRatio ratio={ratio} className={className || ''}>
        <StyledImage className={imageClass} {...image} />
      </AspectRatio>
    );
  }

  return <StyledImage className={`${className} ${imageClass}`} {...image} />;
};

export default Image;
