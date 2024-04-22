import {
  IChangePasswordFirstLoginPayload,
  IChangePasswordPayload,
  IForgotPasswordPayload,
  ILoginPayload,
  ILoginResponse,
  IResetPasswordPayload,
  IUser,
} from "@interfaces/auth";
import { axiosInstance } from "@libs/axios";
import { buildQueryString } from "@utils/api";

// Login -----------------------------------------------------------------
const login = async (payload: ILoginPayload): Promise<ILoginResponse> => {
  const query = buildQueryString({ ...payload });
  console.log(query);
  return axiosInstance.post(`/login${query}`);
};

// Logout ----------------------------------------------------------------
const logout = async () => {
  return axiosInstance.post("/logout");
};

// Forgot Password -------------------------------------------------------
const forgotPassword = async (payload: IForgotPasswordPayload) => {
  const query = buildQueryString({ ...payload });
  return axiosInstance.post(`/forgot-password?${query}`);
};

// Reset Password --------------------------------------------------------
const resetPassword = async (payload: IResetPasswordPayload) => {
  const query = buildQueryString({ ...payload });
  return axiosInstance.post(`/reset-password?${query}`);
};

// Change Password -------------------------------------------------------
const changePassword = async (payload: IChangePasswordPayload) => {
  const query = buildQueryString({ ...payload });
  return axiosInstance.post(`/change-password?${query}`);
};

// Change Password First Login -------------------------------------------
const changePasswordFirstLogin = async (
  payload: IChangePasswordFirstLoginPayload
) => {
  const query = buildQueryString({ ...payload });
  return axiosInstance.post(`/change-password-first-login?${query}`);
};

// Get current user -------------------------------------------------------
const getCurrentUser = async (): Promise<IUser> => {
  return axiosInstance.get("/user/detail");
};

export default {
  login,
  logout,
  forgotPassword,
  resetPassword,
  changePassword,
  changePasswordFirstLogin,
  getCurrentUser,
};
