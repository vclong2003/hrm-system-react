import { useEffect, useRef, useState } from "react";

export default function useDebounce<T>(
  initialValue?: T,
  delay = 500
): [T | undefined, (value: T) => void] {
  const [value, setValue] = useState<T | undefined>(initialValue);
  const [debounceValue, setDebounceValue] = useState<T>();
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebounceValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return [debounceValue, setValue];
}
