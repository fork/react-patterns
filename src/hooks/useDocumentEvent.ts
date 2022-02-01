import { useEffect } from 'react';

const useDocumentEvent = (event: string, callback: (eventCB: any) => void): void => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener(event, callback);
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener(event, callback);
      }
    };
  }, [event, callback]);
};

export default useDocumentEvent;
