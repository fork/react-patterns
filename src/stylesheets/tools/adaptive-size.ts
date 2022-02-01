export interface AdaptiveSizeOptions {
  breakpoints: number[];
  fontSizes: number[];
  lineHeights?: number[];
  letterSpacings?: number[];
  steps?: number | number[];
  properties?: AdaptiveSizeProperties;
}

type AdaptiveSizeCssVariablesOptions = Omit<AdaptiveSizeOptions, 'properties'>;

type BreakpointItem = {
  fontSize: string;
  lineHeight?: number;
};

type AdaptiveSizeKeys = 'fontSize' | 'lineHeight' | 'letterSpacings' | string;

export type AdaptiveSizeStyles = {
  // eslint-disable-next-line no-unused-vars
  [key in AdaptiveSizeKeys]: string | number | BreakpointItem;
};

type AdaptiveSizeProperties = {
  size?: AdaptiveSizeKeys;
  lineHeight?: AdaptiveSizeKeys;
  letterSpacing?: AdaptiveSizeKeys;
};

const defaultProperties: AdaptiveSizeProperties = {
  size: 'fontSize',
  lineHeight: 'lineHeight',
  letterSpacing: 'letterSpacing'
};

const interpolate = (width: number, from: number, to: number, min: number, max: number): number =>
  min + (max - min) * ((width - from) / (to - from));

/**
 * Transform px value to rem value.
 * @param {number} px - PX value as a integer. e.g. 12
 * @returns {string} - PX value in REM
 * @example ${px2rem(25)}
 */
export const px2rem = (px: number): string => `${(px / 16).toFixed(4)}rem`;

/**
 * Returns adaptive font-size as object
 * @param  {object} options - Options object with fontSizes, lineHeights, letterSpacings, breakpoints and steps key
 * @example adaptiveSize({ fontSizes: [14, 16], lineHeights: [1.4, 1.67], letterSpacings: [0, 0.2], breakpoints: [320, 960], steps: 10 })
 * @returns {string} Resulting adaptive css font-size string
 */
export const adaptiveSize = ({
  fontSizes,
  breakpoints,
  steps = 8,
  lineHeights,
  letterSpacings,
  properties = defaultProperties
}: AdaptiveSizeOptions): AdaptiveSizeStyles => {
  const mediaQueries: { [key: string]: any } = {};
  const props = { ...defaultProperties, ...properties };

  for (let i = 1; i < fontSizes.length; i += 1) {
    // Check if steps is a number else use key from steps array
    const step = typeof steps === 'number' ? steps : steps[i - 1];

    const partialStep = (breakpoints[i] - breakpoints[i - 1]) / step;

    const startIndex = i === 1 ? breakpoints[i - 1] + partialStep : breakpoints[i - 1];
    const endIndex = i === fontSizes.length - 1 ? breakpoints[i] : breakpoints[i] - partialStep;

    for (let j = startIndex; parseFloat(j.toFixed(0)) <= endIndex; j += partialStep) {
      const value = interpolate(
        j,
        breakpoints[i - 1],
        breakpoints[i],
        fontSizes[i - 1],
        fontSizes[i]
      );

      const lh = lineHeights
        ? {
            [props.lineHeight]: px2rem(
              parseFloat(
                interpolate(
                  j,
                  breakpoints[i - 1],
                  breakpoints[i],
                  lineHeights[i - 1],
                  lineHeights[i]
                ).toFixed(2)
              ) * value
            )
          }
        : undefined;

      const ls = letterSpacings
        ? {
            [props.letterSpacing]: px2rem(
              parseFloat(
                interpolate(
                  j,
                  breakpoints[i - 1],
                  breakpoints[i],
                  letterSpacings[i - 1],
                  letterSpacings[i]
                ).toFixed(2)
              ) * value
            )
          }
        : undefined;

      const mq = px2rem(j);
      const fontSize = px2rem(value);

      mediaQueries[`@media (min-width: ${mq})`] = {
        [props.size]: `${fontSize}`,
        ...lh,
        ...ls
      };
    }
  }

  return {
    [props.size]: px2rem(fontSizes[0]),
    ...(lineHeights ? { [props.lineHeight]: px2rem(lineHeights[0] * fontSizes[0]) } : undefined),
    ...(letterSpacings
      ? { [props.letterSpacing]: px2rem(letterSpacings[0] * fontSizes[0]) }
      : undefined),
    ...mediaQueries
  };
};

/**
 * Returns adaptive font-size css variables
 * @param {string} key - Key of the variable
 * @param  {object} options - Options object with fontSizes, lineHeights, breakpoints and steps key
 * @example adaptiveSizeCssVariables("headline", { fontSizes: [14, 16], lineHeights: [1.4, 1.67], breakpoints: [320, 960], steps: 10 })
 * @returns {string} Resulting adaptive css font-size variables
 */
export const adaptiveSizeCssVariables = (key: string, options: AdaptiveSizeCssVariablesOptions) =>
  adaptiveSize({
    ...options,
    properties: {
      size: `--${key}-font-size`,
      lineHeight: `--${key}-line-height`,
      letterSpacing: `--${key}-line-height`
    }
  });

export default adaptiveSize;
