/**
 * The key used to store the token in the local storage.
 */
const TOKEN_KEY = "token";

/**
 * Saves the token to the local storage.
 * @param token - The token to be saved.
 */
const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

/**
 * Retrieves the token from the local storage.
 * @returns The token if it exists, otherwise null.
 */
const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * Redirects the user to the login page.
 */
const redirectToLogin = (): void => {
  window.location.href = "/login";
};

export default {
  saveToken,
  getToken,
  redirectToLogin,
};
