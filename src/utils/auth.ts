const TOKEN_KEY = "token";

const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export default {
  saveToken,
  getToken,
};
