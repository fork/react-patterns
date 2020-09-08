/* eslint-disable global-require, import/no-dynamic-require */
import PropTypes from 'prop-types';
import React from 'react';

import StyledIcon from './Icon.style';

const Icon = ({ icon, size, ...props }) => {
  const updatedIcon = typeof icon === 'object' ? icon : require(`./icons/${icon}.svg`).default;

  return (
    <StyledIcon size={size} viewBox={updatedIcon.viewBox} role="presentation" {...props}>
      <use xlinkHref={`#${updatedIcon.id}`} />
    </StyledIcon>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]).isRequired,
  size: PropTypes.oneOf(['small', 'large'])
};

Icon.defaultProps = {
  size: 'small'
};

export default Icon;
