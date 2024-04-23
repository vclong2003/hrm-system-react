import { API_BASE_URL } from "@configs/api.config";
import axios from "axios";

import authUtils from "@utils/auth";
import notiUtils from "@utils/notification";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = authUtils.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response.data?.data,
  (error) => {
    if (error.response?.status === 401) {
      authUtils.redirectToLogin();
      return Promise.reject("Unauthorized");
    }

    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong!";

    notiUtils.notifyError(message);
    return Promise.reject(message);
  }
);
