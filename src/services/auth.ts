import {
  IChangePasswordFirstLoginPayload,
  IChangePasswordPayload,
  IForgotPasswordPayload,
  ILoginPayload,
  ILoginResponse,
  IResetPasswordPayload,
} from "@interfaces/auth";
import { axiosInstance } from "@libs/axios";

// Login -----------------------------------------------------------------
const login = async (payload: ILoginPayload): Promise<ILoginResponse> => {
  return axiosInstance.post("/login", payload);
};

// Logout ----------------------------------------------------------------
const logout = async () => {
  return axiosInstance.post("/logout");
};

// Forgot Password -------------------------------------------------------
const forgotPassword = async (payload: IForgotPasswordPayload) => {
  return axiosInstance.post("/forgot-password", payload);
};

// Reset Password --------------------------------------------------------
const resetPassword = async (payload: IResetPasswordPayload) => {
  return axiosInstance.post("/reset-password", payload);
};

// Change Password -------------------------------------------------------
const changePassword = async (payload: IChangePasswordPayload) => {
  return axiosInstance.post("/change-password", payload);
};

// Change Password First Login -------------------------------------------
const changePasswordFirstLogin = async (
  payload: IChangePasswordFirstLoginPayload
) => {
  return axiosInstance.post("/change-password-first-login", payload);
};

export default {
  login,
  logout,
  forgotPassword,
  resetPassword,
  changePassword,
  changePasswordFirstLogin,
};
