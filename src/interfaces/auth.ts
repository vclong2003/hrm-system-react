import { ICompany } from "./company";
import { IDepartment } from "./department";
import { IEmployee } from "./employee";

export interface IProfile {
  id: number;
  username: string;
  email: string;
  role_id: number;
  level: number;
  employee_id: number;
  department_id: number;
  company_id: number;
  register_token: string;
  email_verified_at: string;
  is_active: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  department_name: string;
  position_name: string;
  department: string;
  employee: IEmployee | null;
  company: ICompany;
  departments: IDepartment[];
}

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
