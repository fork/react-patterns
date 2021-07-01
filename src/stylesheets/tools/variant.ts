type VariantsObject = {
  prop?: string;
  default?: string;
  [key: string]: any;
};

const variant =
  (variants: VariantsObject): any =>
  (props: any) => {
    const { prop: variantsProp = 'variant', default: defaultVariant } = variants;
    const { [variantsProp]: propsProp } = props;

    const key = propsProp;

    if (variants[key]) return variants[key];
    if (defaultVariant && variants[defaultVariant]) return variants[defaultVariant];

    return null;
  };

export default variant;
