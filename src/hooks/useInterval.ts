import { useRef, useEffect } from 'react';

const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void | null>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback?.current) {
        savedCallback.current();
      }
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return () => null;
  }, [delay]);
};

export default useInterval;
