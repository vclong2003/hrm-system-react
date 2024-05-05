import { useSearchParams } from "react-router-dom";

export default function useQueryParams<T extends string>() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: T) => {
    return searchParams.get(key);
  };

  const setParam = (key: T, value: string | null | undefined) => {
    if (!value) {
      return setSearchParams((params) => {
        params.delete(key);
        return params;
      });
    }
    setSearchParams((params) => {
      params.set(key, value);
      return params;
    });
  };

  return { getParam, setParam };
}
