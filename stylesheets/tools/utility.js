/* eslint-disable prefer-template, no-bitwise */

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * @returns {string} - Returns CSS to hide content
 * @example ${hideVisually()}
 */
export const hideVisually = () => {
  return `
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px
  `;
};

/**
 * CSS to reset button styling.
 * @returns {string} - Button reset styles
 * @example ${btnReset()}
 */
export const btnReset = () => {
  return `
    appearance: none;
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
  }
  `;
};

export const hexToRgbA = (hex, opacity = 1) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join(''); /* eslint-disable-line */
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
  }
  throw new Error('Bad Hex');
};

export const stripUnit = (value, unitReturn = true) => {
  if (typeof value !== 'string') return unitReturn ? [value, undefined] : value;
  const matchedValue = value.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);

  if (unitReturn) {
    if (matchedValue) return [parseFloat(value), matchedValue[2]];
    return [value, undefined];
  }

  if (matchedValue) return parseFloat(value);
  return value;
};

export const modularScale = (steps, base, ratio) => {
  const [realBase, unit] = typeof base === 'string' ? stripUnit(base, true) : [base, ''];
  return `${realBase * parseFloat(ratio) ** parseFloat(steps)}${unit}`;
};
