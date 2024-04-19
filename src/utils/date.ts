/**
 * Converts a date string to an ISO date string.
 * @param date - The date string to convert.
 * @returns The converted ISO date string in the format "yyyy-mm-dd".
 */
export const toISODateString = (date: string): string => {
  return new Date(date).toISOString().split("T")[0];
};
