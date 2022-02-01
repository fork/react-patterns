import { Colors, Tokens } from '../../tokens';

/**
 * Returns color from theme object referenced by id
 * @param  {string} id - Identifier for the color in theme object. Default: 'primary'
 * @param  {number} shade - Identifier for the color shade in theme object. Default: 'default'
 * @returns {string} Resulting color from theme object
 * @example color: ${color('primary', 50)};
 */
const color =
  (id: Colors = 'primary', shade?: number) =>
  ({ theme }: { theme: Tokens }): string => {
    const { colors } = theme;

    if (!colors) {
      throw new Error('Colors are not defined in tokens object');
    }

    if (!Object.prototype.hasOwnProperty.call(colors, id)) {
      throw new Error(`Color "${id}" not known`);
    }

    if (!shade) {
      const defaultShade = colors[id].default;

      if (!Object.prototype.hasOwnProperty.call(colors[id], defaultShade)) {
        throw new Error(`Color shade "${defaultShade}" in "${id}" not known`);
      }

      return `var(--colors-${id}-${defaultShade})`;
    }

    if (!Object.prototype.hasOwnProperty.call(colors[id], shade)) {
      throw new Error(`Color shade "${shade}" in "${id}" not known`);
    }

    return `var(--colors-${id}-${shade})`;
  };

export default color;
