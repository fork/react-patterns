import { Breakpoints, Tokens } from '../../tokens';
import { px2rem } from './spacing';

/**
 * Simple CSS MediaQuery
 * @param {string} id - Identifier for the breakpoint in theme object
 * @param {string} minMax - Default: min. String for the media-query type
 * @returns {string} Media query definition
 * @example ${mq('m', 'max')} { css styles go here };
 */
const mq =
  (id: Breakpoints, minMax = 'min') =>
  ({ theme }: { theme: Tokens }): string => {
    let mediaQueries = theme.breakpoints;

    const defaultMediaQueries = {
      s: 375,
      m: 768,
      l: 1440
    };

    if (typeof id !== 'string') {
      throw new Error('id must be a string');
    }

    if (!Object.prototype.hasOwnProperty.call(mediaQueries, id)) {
      console.warn('No media queries set in theme object. Fallback to default breakpoints.');
      mediaQueries = defaultMediaQueries;
    }

    return `
    @media (${minMax}-width: ${px2rem(mediaQueries[id])}) 
  `;
  };

export default mq;
