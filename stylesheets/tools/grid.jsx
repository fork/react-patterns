import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import mq from './mediaQuery';
import useWindowEvent from '../../hooks/useWindowEvent';

const grid = {
  gutters: {
    s: 12,
    m: 30,
    l: 30
  },
  columns: {
    s: 4,
    m: 6,
    l: 12
  },
  debugColors: '#cceaf8'
};

/* stylelint-disable */
export const displayGrid = css`
  display: -ms-grid;
  display: grid;
`;

const parseGridSpan = prop => {
  const idx = prop.indexOf('/');
  const start = idx === -1 ? prop : prop.substring(0, idx).trim();
  const end = idx !== -1 && prop.substring(idx + 1).trim();
  const span = end && end.substring(0, 4) === 'span' && end.substring(4).trim();

  if (start.indexOf('span') !== -1) {
    console.warn(
      'grid-column: Internet Explorer only supports `grid-column: xx / span yy;` syntax'
    );
  }

  return {
    prop,
    start,
    end,
    span
  };
};

export const gridColumn = prop => {
  const { start, end, span } = parseGridSpan(prop);

  return css`
    -ms-grid-column: ${start};
    ${span && `-ms-grid-column-span: ${span};`}
    ${!span && end && `-ms-grid-column-span: ${parseInt(end, 10) - 1};`}
    grid-column: ${prop};
  `;
};

export const gridRow = prop => {
  const { start, end, span } = parseGridSpan(prop);

  return css`
    -ms-grid-row: ${start};
    ${span && `-ms-grid-row-span: ${span};`}
    ${!span && end && `-ms-grid-row-span: ${parseInt(end, 10) - 1};`}
    grid-row: ${prop};
  `;
};

export const gridTemplateColumns = prop => {
  const repeat = prop.match(/^repeat\((\d+), (.+)\)$/);

  return css`
    -ms-grid-columns: ${repeat ? `(${repeat[2]})[${repeat[1]}]` : prop};
    grid-template-columns: ${prop};
  `;
};

export const gridTemplateRows = prop => {
  const repeat = prop.match(/^repeat\((\d+), (.+)\)$/);

  return css`
    -ms-grid-rows: ${repeat ? `(${repeat[2]})[${repeat[1]}]` : prop};
    grid-template-rows: ${prop};
  `;
};

export const justifyItems = prop => css`
  -ms-grid-column-align: ${prop};
  justify-items: ${prop};
`;

export const alignItems = prop => css`
  -ms-grid-row-align: ${prop};
  align-items: ${prop};
`;

/**
 * Get gutter calculation
 * @param {string} key - Key of mediaquery
 * @param {string} columns - containing the columns quantity
 * @param {string} spread - defines the spread of the columns. You can pass "normal", "wide", "spread", "full". Default: "normal"
 * @param {string} parentColumns - defines the columns of the parent container. Default: 12
 * @returns {string} Returns grid calculation and sets styles
 * @example ${getGridSpan('m', 6, 'spread', 9)};
 */
function getGridSpan(key, columns, spread = 'normal', parentColumns) {
  if (parentColumns > grid.columns[key]) {
    throw Error(`Maximum parent columns for this breakpoint (${key}) are ${grid.columns[key]}`);
  }

  const newParentColumns = parentColumns || grid.columns[key];

  if (columns > grid.columns[key]) {
    throw Error(`Maximum columns for this breakpoint (${key}) are ${grid.columns[key]}`);
  }

  let spreadSize;

  if (spread === 'normal') {
    spreadSize = `${grid.gutters[key] * (columns - 1)}px`;
  } else if (spread === 'wide') {
    spreadSize = `${grid.gutters[key] * (columns - 1) + grid.gutters[key] / 2}px`;
  } else if (spread === 'spread') {
    spreadSize = `${grid.gutters[key] * (columns - 1) + grid.gutters[key]}px`;
  } else if (spread === 'full') {
    spreadSize = `${grid.gutters[key] * (columns - 1) + grid.gutters[key] * 2}px`;
  } else {
    throw Error('You need to pass "normal", "wide", "spread", "full" as an argument');
  }

  const innerGaps = `${(newParentColumns - 1) * grid.gutters[key]}px`;

  return `
    calc(${spreadSize} + (100% - ${innerGaps}) / ${newParentColumns} * ${columns})
  `;
}

/**
 * Get gutter calculation
 * @param {string} property - css property.
 * @param {object} obj - object with different media queries and settings
 * @returns {string} Returns full grid calculation with media queries and sets styles
 * @example ${getGridSpans('width', { s: 12, m: [8, 'spread', 10], l: [6, 'spread', 8] })};
 */
export function getGridSpans(property, obj) {
  if (typeof property !== 'string') {
    throw Error('Property needs to be a string');
  }

  if (typeof obj !== 'object') {
    throw Error('obj needs to be an object with media queries as keys, eg. { s: 12, m: 10, l: 8 }');
  }

  let string = '';

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'number' && obj[key] === grid.columns[key]) {
      string += key === 's' ? `${property}: 100%;` : `${mq(key)} { ${property}: 100%; };`;

      return;
    }

    if (typeof obj[key] === 'number' && obj[key] === 0) {
      string += key === 's' ? `${property}: 0;` : `${mq(key)} { ${property}: 0; };`;

      return;
    }

    if (typeof obj[key] === 'number') {
      string +=
        key === 's'
          ? `${property}: ${getGridSpan(key, obj[key])};`
          : `${mq(key)} { ${property}: ${getGridSpan(key, obj[key])}; };`;

      return;
    }

    if (typeof obj[key] === 'object') {
      string +=
        key === 's'
          ? `${property}: ${getGridSpan(key, obj[key][0], obj[key][1], obj[key][2])};`
          : `${mq(key)} { ${property}: ${getGridSpan(
              key,
              obj[key][0],
              obj[key][1],
              obj[key][2]
            )}; };`;
    }
  });

  return string;
}

export function getGridGutter(key) {
  return `${grid.gutters[key]}px`;
}

/**
 * Displays a simple debug Grid to show columns and gaps
 * @param {bool} isHidden - Boolean for visibility state. Default: true
 * @returns {string} Returns simple debug grid (just use in development)
 * @example <DebugGrid />;
 */
export const DebugGrid = ({ isHidden, onUpdate }) => {
  const [hidden, setHidden] = useState(isHidden);

  useEffect(() => setHidden(isHidden), [isHidden]);
  useEffect(() => {
    if (onUpdate) onUpdate(hidden);
  }, [hidden]);

  const createColumns = () => {
    const columns = [];
    for (let i = 0; i < grid.columns.l; i += 1) {
      columns.push(<Column key={i} />);
    }
    return columns;
  };

  const handleKeyDown = event => {
    if (event.code === 'KeyG') {
      setHidden(prev => !prev);
    }
  };
  useWindowEvent('keydown', e => handleKeyDown(e));

  return <DebugGridContainer hidden={hidden}>{createColumns()}</DebugGridContainer>;
};

DebugGrid.propTypes = {
  isHidden: PropTypes.bool,
  onUpdate: PropTypes.func
};

DebugGrid.defaultProps = {
  isHidden: true,
  onUpdate: undefined
};

const DebugGridContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-top: 1px solid #ff0000;
  border-bottom: 1px solid #ff0000;
  white-space: nowrap;

  &.hidden {
    display: none;
  }
`;

const Column = styled.span`
  position: relative;
  opacity: 0.5;
  display: inline-block;
  width: calc((100% - ${(grid.columns.s - 1) * grid.gutters.s}px) / ${grid.columns.s});

  height: 100%;
  box-sizing: border-box;
  margin-right: ${grid.gutters.s}px;
  border-right: 1px solid #ff0000;
  border-left: 1px solid #ff0000;

  background: ${grid.debugColors ? grid.debugColors : 'pink'};

  &:nth-last-child(-n + 8) {
    display: none;
  }

  ${mq('m')} {
    width: calc((100% - ${(grid.columns.m - 1) * grid.gutters.m}px) / ${grid.columns.m});
    margin-right: ${grid.gutters.m}px;

    &:nth-last-child(-n + 8) {
      display: inline-block;
    }

    &:nth-last-child(-n + 6) {
      display: none;
    }
  }

  ${mq('l')} {
    width: calc((100% - ${(grid.columns.l - 1) * grid.gutters.l}px) / ${grid.columns.l});
    margin-right: ${grid.gutters.l}px;

    &:nth-last-child(-n + 6) {
      display: inline-block;
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
