/* eslint-disable no-restricted-syntax */
import { baseTokens } from '../../tokens';
import { adaptiveSizeCssVariables } from './adaptive-size';
import { px2rem } from './spacing';

export const buildCSSVariable = (path: string[], value: number | string) => {
  const variableName = `--${path.join('-')}`;
  const cssValue =
    typeof value === 'string' && value.endsWith('px')
      ? px2rem(parseFloat(value.split('px')[0]))
      : value;

  return { [variableName]: cssValue };
};

export const getCSSVar = (path: string[]) => `var(--${path.join('-')})`;

export const objectToCSSVariables = (prefix: string, object: any) => {
  let vars = {};

  const loopThroughObject = (obj: any, path: string[] = []) => {
    for (const k in obj) {
      if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
        loopThroughObject(obj[k], [...path, k]);
      } else {
        vars = { ...vars, ...buildCSSVariable([...path, k], obj[k]) };
      }
    }
  };

  loopThroughObject(object, [prefix]);

  return vars;
};

export const colorsToCSSVariables = (colors: any) => {
  let vars = {};

  const loopThroughColorsObject = (obj: any, path: string[] = []) => {
    for (const k in obj) {
      if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
        loopThroughColorsObject(obj[k], [...path, k]);
      } else {
        if (k === 'default') return;
        vars = { ...vars, ...buildCSSVariable([...path, k], obj[k]) };
      }
    }
  };

  loopThroughColorsObject(colors, ['colors']);

  return vars;
};

export const typographyToCSSVariables = (obj: any) => {
  let vars: { [key: string]: any } = {};

  Object.keys(obj).forEach(k => {
    const newVars: { [key: string]: any } = adaptiveSizeCssVariables(['typography', k].join('-'), {
      breakpoints: Object.values(baseTokens.breakpoints),
      fontSizes: obj[k].fontSizes,
      letterSpacings: obj[k].letterSpacings,
      lineHeights: obj[k].lineHeights
    });

    Object.keys(newVars).forEach(i => {
      if (Object.keys(vars).length === 0) {
        vars = newVars;
        return;
      }

      if (i.startsWith('@media') && vars[i]) {
        vars = {
          ...vars,
          [i]: {
            ...vars[i],
            ...newVars[i]
          }
        };
      } else {
        vars = {
          ...vars,
          [i]: newVars[i]
        };
      }
    });
  });

  return vars;
};
