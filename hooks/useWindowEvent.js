import { useEffect } from 'react';

export default (event, callback) => {
  useEffect(() => {
    if (process && process.browser) {
      window.addEventListener(event, callback);
    }
    return () => {
      if (process && process.browser) {
        window.removeEventListener(event, callback);
      }
    };
  }, [event, callback]);
};
