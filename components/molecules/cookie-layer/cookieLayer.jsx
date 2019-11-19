import PropTypes from 'prop-types';
import React from 'react';

import MixedCopy from '../mixed-copy/mixed-copy';
import Button from '../../atoms/button/button';

const CookieLayer = ({
  content,
  acceptLabel,
  rejectLabel,
  isVisible,
  onAccept,
  onReject,
  className,
  ...props
}) => {
  return (
    isVisible && (
      <div className={className} {...props}>
        <MixedCopy html={content} className="cookieLayer__content" />
        <div className="cookieLayer__buttons">
          <Button onClick={onAccept}>{acceptLabel}</Button>
          {rejectLabel && <Button onClick={onReject}>{rejectLabel}</Button>}
        </div>
      </div>
    )
  );
};

CookieLayer.propTypes = {
  content: PropTypes.string,
  acceptLabel: PropTypes.string,
  rejectLabel: PropTypes.string,
  isVisible: PropTypes.bool,
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
  className: PropTypes.string
};

CookieLayer.defaultProps = {
  content: null,
  acceptLabel: 'Accept',
  rejectLabel: null,
  isVisible: true,
  onAccept: () => {},
  onReject: () => {},
  className: ''
};

export default CookieLayer;
