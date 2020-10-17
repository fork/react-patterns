import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import Button from '../Button';
import Richtext from '../Richtext';

import StyledCookieLayer from './CookieLayer.style';

export type CookieLayerProps = {
  content: string;
  acceptLabel: string;
  rejectLabel: string;
  onAccept?: () => void;
  onReject?: () => void;
};

const CookieLayer: React.FC<CookieLayerProps> = ({
  content,
  acceptLabel,
  rejectLabel,
  onAccept,
  onReject
}: CookieLayerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookies = Cookies.get('acceptCookies');
    setIsVisible(typeof cookies === 'undefined');
  }, []);

  const handleClick = (value: 'reject' | 'accept') => {
    Cookies.set('acceptCookies', value, { expires: 14 });
    setIsVisible(false);
  };

  return (
    isVisible && (
      <StyledCookieLayer isVisible={isVisible}>
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

export default CookieLayer;
