import { useEffect } from 'react';

export default (event: keyof WindowEventMap, callback: (e: any) => void): void => {
  useEffect(() => {
    if (window) {
      window.addEventListener(event, callback);
    }

    return () => {
      if (window) {
        window.removeEventListener(event, callback);
      }
    };
  }, [event, callback]);
};
