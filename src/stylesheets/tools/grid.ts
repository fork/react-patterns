import { css, FlattenSimpleInterpolation, FlattenInterpolation } from 'styled-components';

import mq from './mediaQuery';
import { px2rem } from './spacing';
import { Breakpoints, Tokens } from '../../tokens';

export const gridContainer =
  () =>
  ({ theme }: { theme: Tokens }): FlattenSimpleInterpolation =>
    css`
      margin: 0 auto;
      max-width: ${px2rem(theme.maxwidth)};
      width: 100%;
    `;

const getOuterGridGaps =
  () =>
  ({ theme }: { theme: Tokens }): FlattenInterpolation<any> =>
    css`
      padding-right: ${theme.grid.default.columnGap}px;
      padding-left: ${theme.grid.default.columnGap}px;

      ${mq('s')} {
        padding-right: ${theme.grid.s.columnGap}px;
        padding-left: ${theme.grid.s.columnGap}px;
      }

      ${mq('m')} {
        padding-right: ${theme.grid.m.columnGap}px;
        padding-left: ${theme.grid.m.columnGap}px;
      }

      ${mq('l')} {
        padding-right: ${theme.grid.l.columnGap}px;
        padding-left: ${theme.grid.l.columnGap}px;
      }
    `;

type DynamicKey = 'default' | Breakpoints;
type ColumnsConfig = { default: number; s?: number; m?: number; l?: number };

const getGridColumns =
  (columnsConfig?: ColumnsConfig) =>
  ({ theme }: { theme: Tokens }): string => {
    let columnsCSS = '';

    Object.keys(columnsConfig || theme.grid).forEach(key => {
      const breakpoint = key as DynamicKey;
      const columns = columnsConfig?.[breakpoint] || theme.grid[breakpoint].columns;

      const string =
        breakpoint === 'default'
          ? `grid-template-columns: repeat(${columns}, 1fr);`
          : `${mq(breakpoint)({ theme })} { grid-template-columns: repeat(${columns}, 1fr);}`;

      columnsCSS += string;
    });

    return columnsCSS;
  };

const getGridGap =
  () =>
  ({ theme }: { theme: Tokens }): string => {
    let columnsGapCSS = '';

    Object.keys(theme.grid).forEach(key => {
      const breakpoint = key as DynamicKey;
      const columnGap = `${theme.grid[breakpoint].columnGap}px`;

      const string =
        breakpoint === 'default'
          ? `grid-column-gap: ${columnGap};`
          : `${mq(breakpoint)({ theme })} { grid-column-gap: ${columnGap};}`;

      columnsGapCSS += string;
    });

    return columnsGapCSS;
  };

export const getGrid = (
  columnsConfig?: ColumnsConfig,
  outerGridGaps = true
): FlattenInterpolation<any> => {
  const columns = getGridColumns(columnsConfig);
  const columnGap = getGridGap();

  return css`
    display: grid;
    ${columnGap};
    ${columns};
    ${outerGridGaps && getOuterGridGaps()}
  `;
};
