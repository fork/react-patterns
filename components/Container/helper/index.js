import { color, space } from '../../../stylesheets';

export const getBackground = background => {
  if (typeof background === 'undefined') return null;

  if (typeof background === 'string') {
    return color(background);
  }

  const colorStops = background.map(item => color(item)).join(',');

  return `linear-gradient(to bottom, ${colorStops})`;
};

export const getSpacings = spacings => {
  if (typeof spacings === 'undefined') return null;

  if (typeof spacings === 'string') {
    return space(spacings);
  }

  return spacings
    .map(item => {
      if (typeof item === 'string') return space(item);
      return 0;
    })
    .join(' ');
};

export const getColor = value => (value ? color(value) : null);
export const getBorderRadius = value => (value ? space(value) : null);
