const TOKEN_KEY = "token";

const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

const redirectToLogin = (): void => {
  window.location.href = "/";
};

const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  redirectToLogin();
};

export default {
  saveToken,
  getToken,
  redirectToLogin,
  logout,
};
