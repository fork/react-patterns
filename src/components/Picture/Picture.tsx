import React, { ReactNode } from 'react';

import Image from '../Image';

import { buildSrcSet, buildImageObject } from '../Image/helper';

import StyledPicture from './Picture.style';

export type PictureProps = {
  alt?: string;
  src: string;
  /**
   * Defines if image should lazy load
   */
  lazy?: boolean;
  children?: ReactNode;
};

export type SourceProps = {
  media: string;
  /**
   * srcset object, e.g. { 300vw: "path/to/image", 400vw: "path/to/image" }
   */
  srcset?: { [key: string]: string };
  sizes?: string;
  /**
   * Defines if image should lazy load
   */
  lazy?: boolean;
};

export const Source: React.FC<SourceProps> = ({ media, srcset, sizes, lazy }: SourceProps) => {
  const { image } = buildImageObject(
    {
      sizes: null,
      src: null,
      srcSet: srcset ? buildSrcSet(srcset) : null
    },
    lazy
  );

  return <source media={media} sizes={sizes} {...image} />;
};

const Picture: React.FC<PictureProps> = ({ src, alt, children, lazy }: PictureProps) => (
  <StyledPicture>
    {children}
    <Image src={src} alt={alt} lazy={lazy} />
  </StyledPicture>
);

export default Picture;
