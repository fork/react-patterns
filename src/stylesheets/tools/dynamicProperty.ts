import { Breakpoints } from '../../tokens';
import mq from './mediaQuery';

export type DynamicKey = 'default' | Breakpoints;

export type DynamicProp<T = string> = {
  [key in DynamicKey]?: T;
};

const dynamicProperty = <T = string>(
  property: string,
  value?: string | number | DynamicProp<T>
): string => {
  if (typeof value === 'undefined') return undefined;

  if (typeof value !== 'number' && typeof value !== 'string') {
    let breakpoints = '';

    Object.keys(value).map(item => {
      const breakpoint = item as DynamicKey;

      if (breakpoint === 'default') {
        breakpoints += `${property}: ${value[breakpoint]};`;
      } else {
        breakpoints += `${mq(breakpoint)} {
          ${property}: ${value[breakpoint]};
        }`;
      }
    });

    return breakpoints;
  }

  return `${property}: ${value};`;
};

export default dynamicProperty;
