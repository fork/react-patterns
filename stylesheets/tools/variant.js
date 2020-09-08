const variant = variants => props => {
  // eslint-disable-next-line
  const key = props[variants.prop || 'variant'];

  if (variants[key]) {
    return variants[key];
  }

  return null;
};

export default variant;
