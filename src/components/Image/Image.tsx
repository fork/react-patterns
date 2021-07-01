import React, { useEffect, useState } from 'react';

import buildImageProps from './helper';

import StyledImage from './Image.style';

export type ImageProps = {
  alt?: string;
  src?: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
  role?: string;
  lazy?: boolean;
  className?: string;
  media?: string;
  as?: 'img' | 'source';
  hasNativeLazyLoading?: boolean;
};

export type ReturnImageProps = React.HTMLProps<HTMLImageElement>;

const Image = (props: ImageProps) => {
  const [hasNativeLazyLoading, sethasNativeLazyLoading] = useState(false);
  const { alt, as = 'img' } = props;

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof HTMLImageElement !== 'undefined' &&
      'loading' in HTMLImageElement.prototype
    ) {
      sethasNativeLazyLoading(true);
    }
  }, []);

  const imageProps: ImageProps = buildImageProps({
    ...props,
    role: !alt ? 'presentation' : undefined,
    hasNativeLazyLoading
  });

  if (as === 'source') {
    delete imageProps.alt;
    delete imageProps.lazy;
    delete imageProps.src;
    delete imageProps.className;
    delete imageProps.width;
    delete imageProps.height;

    return <source {...imageProps} />;
  }

  return <StyledImage {...imageProps} />;
};

export default Image;
