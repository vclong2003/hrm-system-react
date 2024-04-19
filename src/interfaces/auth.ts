// Login ---------------------------------------------
export interface ILoginPayload {
  username: string;
  password: string;
  company_id: number;
}

// Forgot Password -----------------------------------
export interface IForgotPasswordPayload {
  email: string;
}

// Reset Password -------------------------------------
export interface IResetPasswordPayload {
  email: string;
  company_id: number;
  token: string;
  password: string;
  password_confirmation: string;
}

// Change password ------------------------------------
export interface IChangePasswordPayload {
  email: string;
  company_id: number;
  password: string;
  password_confirmation: string;
}

// Change password first login -------------------------
export interface IChangePasswordFirstLoginPayload {
  token: string;
  password: string;
  password_confirmation: string;
}
