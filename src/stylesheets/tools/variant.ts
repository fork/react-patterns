type VariantsObject = {
  prop?: string;
  [key: string]: any;
};

const variant = (variants: VariantsObject): any => (props: any) => {
  const { prop: variantsProp } = variants;
  const { [variantsProp]: propsProp } = props;

  const key = propsProp || 'variant';

  if (variants[key]) {
    return variants[key];
  }

  return null;
};

export default variant;
