import { useCallback, useEffect, useRef } from 'react';

export type UseFocusTrapOptions = {
  initialFocusRef?: React.RefObject<HTMLElement> | null;
  onKeyDown?: (e: any) => void;
};
export default function useFocusTrap<T>(options?: UseFocusTrapOptions): {
  ref: React.RefObject<T>;
} {
  const { initialFocusRef, onKeyDown } = options || {
    initialFocusRef: undefined,
    onKeyDown: undefined
  };

  const ref = useRef<T>(null);
  const prevFocus = useRef(document.activeElement as HTMLElement | null);

  const getFocusElements = useCallback(() => {
    if (!ref.current) return [undefined, undefined];

    const elements = (ref.current as any).querySelectorAll(
      'a[href], button:not([disabled]), textarea, input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select'
    );

    const first = elements && elements.length > 0 ? elements[0] : null;
    const last = elements && elements.length > 0 ? elements[elements.length - 1] : null;

    return [first, last];
  }, [ref]);

  const handleTabKey = useCallback(e => {
    const [first, last] = getFocusElements();
    if (!first && !last) return e.preventDefault();

    if (!e.shiftKey && document.activeElement === last) {
      first?.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === first) {
      last?.focus();
      return e.preventDefault();
    }

    return null;
  }, []);

  const handleKeyDown = useCallback(e => {
    if (onKeyDown) onKeyDown(e);
    if (e.keyCode === 9) handleTabKey(e);
  }, []);

  useEffect(() => {
    if (initialFocusRef && initialFocusRef.current) {
      return initialFocusRef.current.focus();
    }

    const [first] = getFocusElements();
    first?.focus();

    return () => {
      if (prevFocus.current && prevFocus.current.focus) prevFocus.current.focus();
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { ref };
}
