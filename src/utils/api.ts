/**
 * Builds a query string from the given parameters object.
 * @param params - The parameters object containing key-value pairs.
 * @returns The encoded query string.
 */
export const buildQueryString = (params: {
  [key: string]: unknown;
}): string => {
  let query = "";
  for (const key in params) {
    if (params[key]) {
      query += `${key}=${params[key]}&`;
    }
  }
  return encodeURI("?" + query.slice(0, -1));
};

/**
 * Converts an object to FormData.
 * @param obj - The object to convert.
 * @returns The converted FormData object.
 */
export const objectToFormData = (obj: { [key: string]: unknown }) => {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Array) {
      (obj[key] as unknown[]).forEach((item) => {
        formData.append(key, item as Blob);
      });
      return;
    }
    formData.append(key, obj[key] as Blob);
  });
  return formData;
};