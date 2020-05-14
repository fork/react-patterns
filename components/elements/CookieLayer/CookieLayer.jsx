import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import Button from '../../basics/Button';
import Richtext from '../Richtext';

import StyledCookieLayer from './CookieLayer.style';

const CookieLayer = ({ content, acceptLabel, rejectLabel, onAccept, onReject, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookies = Cookies.get('acceptCookies');
    setIsVisible(typeof cookies === 'undefined');
  }, []);

  const handleClick = value => {
    Cookies.set('acceptCookies', value, { expires: 14 });
    setIsVisible(false);
  };

  return (
    isVisible && (
      <StyledCookieLayer isVisible={isVisible} {...props}>
        <Richtext html={content} className="cookieLayer__content" />
        <div className="cookieLayer__buttons">
          <Button
            onClick={() => {
              onAccept();
              handleClick('accept');
            }}
          >
            {acceptLabel}
          </Button>
          <Button
            onClick={() => {
              onReject();
              handleClick('reject');
            }}
            variant="secondary"
          >
            {rejectLabel}
          </Button>
        </div>
      </StyledCookieLayer>
    )
  );
};

CookieLayer.propTypes = {
  content: PropTypes.string,
  acceptLabel: PropTypes.string,
  rejectLabel: PropTypes.string,
  onAccept: PropTypes.func,
  onReject: PropTypes.func
};

CookieLayer.defaultProps = {
  content: null,
  acceptLabel: 'Accept',
  rejectLabel: 'Reject',
  onAccept: () => {},
  onReject: () => {}
};

export default CookieLayer;
