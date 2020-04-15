/**
 * Returns color from theme object referenced by id
 * @param  {string} id - Identifier for the color in theme object. Default: 'white'
 * @returns {string} Resulting color from theme object
 * @example color: ${color('white')};
 */
const color = (id = 'white') => ({ theme }) => {
  const { colors } = theme;

  if (!colors) {
    throw new Error('Colors are not defined in theme object');
  }

  if (!Object.prototype.hasOwnProperty.call(colors, id)) {
    throw new Error(`colors ${id} not known`);
  }

  return colors[id];
};

export default color;
