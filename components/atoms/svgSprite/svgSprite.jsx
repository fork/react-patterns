import PropTypes from 'prop-types';
import React from 'react';

const SvgSprite = ({ icon, width, height, ...props }) => {
  const [viewBoxWidth, viewBoxHeight] = icon.viewBox
    ? icon.viewBox.split(' ').splice(2, 2)
    : [width, height];

  return (
    <svg
      width={width || viewBoxWidth}
      height={height || viewBoxHeight}
      viewBox={icon.viewBox}
      role="presentation"
      {...props}
    >
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  );
};

SvgSprite.propTypes = {
  icon: PropTypes.shape().isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

SvgSprite.defaultProps = {
  width: null,
  height: null
};

export default SvgSprite;
