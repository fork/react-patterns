import { ImageProps } from '../Image';

const buildImageProps = (obj: ImageProps): ImageProps => {
  const image = {
    alt: obj.alt,
    media: obj.media,
    sizes: obj.sizes,
    className: obj.className,
    role: obj.role,
    width: obj.width,
    height: obj.height
  };

  if (obj.lazy && !obj.hasNativeLazyLoading) {
    Object.assign(image, {
      'data-src': obj.src,
      'data-srcset': obj.srcSet,
      className: `${obj.className} lazyload`
    });
  } else if (obj.lazy && obj.hasNativeLazyLoading) {
    Object.assign(image, {
      src: obj.src,
      srcSet: obj.srcSet,
      loading: 'lazy',
      'data-src': undefined
    });
  } else if (!obj.lazy) {
    Object.assign(image, { src: obj.src, srcSet: obj.srcSet });
  }

  return image;
};

export default buildImageProps;
