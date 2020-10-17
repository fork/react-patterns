export const buildSrcSet = (srcset: { [key: string]: string }): string => {
  return Object.keys(srcset)
    .map(key => `${srcset[key]} ${key}`)
    .join(',');
};

export const buildImageObject = (obj: any, lazy: boolean): any => {
  let image = obj;
  let imageClass = '';

  if (lazy && 'loading' in HTMLImageElement.prototype) {
    image = {
      ...image,
      loading: 'lazy'
    };
  } else if (lazy) {
    image = {
      ...image,
      src: null,
      sizes: null,
      srcSet: null,
      'data-srcset': obj.srcSet,
      'data-sizes': obj.sizes,
      'data-src': obj.src
    };
    imageClass = 'lazyload';
  }

  return { image, imageClass };
};
