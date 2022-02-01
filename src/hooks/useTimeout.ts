import { useEffect, useCallback, useRef } from 'react';

/*
 * React hook for delaying calls with time returns callback to use for cancelling:
 * if you create a new callback each render, then previous callback will be cancelled on render
 */
const useTimeout = (callback: () => void, timeout: number) => {
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  const cancelTimeout = useCallback(() => {
    const timeoutId = timeoutIdRef.current;
    if (timeoutId) {
      timeoutIdRef.current = undefined;
      clearTimeout(timeoutId);
    }
  }, [timeoutIdRef]);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(callback, timeout);
    return cancelTimeout;
  }, [callback, timeout, cancelTimeout]);

  return cancelTimeout;
};

export default useTimeout;
