/* eslint-disable prefer-template, no-bitwise */

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * @returns {string} - Returns CSS to hide content
 * @example ${hideVisually()}
 */
export const hideVisually = (): string => `
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

/**
 * CSS to reset button styling.
 * @returns {string} - Button reset styles
 * @example ${btnReset()}
 */
export const btnReset = (): string => `
  appearance: none;
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;

export const hexToRgbA = (hex: string, opacity = 1): string => {
  let c: any;
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
