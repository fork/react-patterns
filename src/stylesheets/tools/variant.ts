type VariantsObject = {
  prop?: string;
  [key: string]: any;
};

const variant = (variants: VariantsObject): any => (props: any) => {
  const key = props[variants.prop || 'variant'];

  if (variants[key]) {
    return variants[key];
  }

  return null;
};

export default variant;
