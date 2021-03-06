import { Spacings, Tokens } from '../../tokens';

/**
 * Transform px value to rem value.
 * @param {number} px - PX value as a integer. e.g. 12
 * @returns {string} - PX value in REM
 * @example ${px2rem(25)}
 */
export function px2rem(px: number): string {
  if (typeof px !== 'number') {
    throw new Error(`${px} is not an integer`);
  }

  return `${px / 16}rem`;
}

/**
 * Returns spacing from theme object referenced by id
 * @param  {string} spacing - Identifier for the spacing in theme object. Default: "s"
 * @returns {string} Resulting spacing from theme object
 * @example margin: ${space('m')};
 */
export const space =
  (spacing: Spacings | Spacings[]) =>
  ({ theme }: { theme: Tokens }): string => {
    const { spacings } = theme;

    if (!spacings) {
      throw new Error('Spacings are not defined in theme object');
    }

    if (typeof spacing === 'string') {
      return `var(--spacings-${spacing})`;
    }

    return spacing.map(id => `var(--spacings-${id})`).join(' ');
  };
