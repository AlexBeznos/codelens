import { useRef } from 'react';

function useThrottle(onThrottle, throttleMs) {
  const timeoutRef = useRef(null);
  const dataRef = useRef([]);

  function push(item) {
    dataRef.current.push(item);
    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        onThrottle(dataRef.current);
        dataRef.current = [];
        timeoutRef.current = null;
      }, throttleMs);
    }
  }

  return push;
}

export default useThrottle;
