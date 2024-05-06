import { useEffect, useRef, useState } from "react";

export default function useDebounce<T>(
  initialValue?: T | undefined | null,
  delay = 500
): [T | undefined, (value: T) => void] {
  const [value, setValue] = useState<T | undefined>(
    initialValue ? initialValue : undefined
  );
  const [debounceValue, setDebounceValue] = useState<T | undefined>(
    initialValue ? initialValue : undefined
  );

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebounceValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return [debounceValue, setValue];
}
