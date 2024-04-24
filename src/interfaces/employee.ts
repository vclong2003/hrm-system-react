import { EGender, EShift, EType } from "src/enums/employee";
import { IDepartment } from "./department";
import { IPosition } from "./position";
import { IBenefit } from "./benefit";
import { IEmployeeDocument } from "./employeeDocument";
import { IMarriage } from "./marriage";

export interface IEmployee {
  id: number;
  old_staff_id: string;
  staff_id: string;
  name: string;
  gender: EGender;
  department_id: number;
  company_id: number;
  marriage_id: number;
  position_id: number;
  type: EType;
  mother_name: string;
  dob: string;
  pob: string;
  ktp_no: string;
  nc_id: number;
  home_address_1: string;
  home_address_2: string;
  mobile_no: string;
  tel_no: number;
  bank_account_no: string;
  bank_name: string;
  card_number: number;
  family_card_number: number;
  health_insurance_no: string;
  safety_insurance_no: string;
  education_background: string;
  emergency_contract: string;
  emergency_relationship: string;
  emergency_name: string;
  basic_salary: number;
  audit_salary: number;
  health_insurance: number;
  safety_insurance: number;
  safety_insurance_audit: number;
  health_insurance_audit: number;
  meal_allowance: number;
  entitle_ot: number;
  meal_allowance_paid: number;
  operational_allowance_paid: number;
  attendance_allowance_paid: number;
  minimum_salary_used: string;
  hidden_on_payroll: string;
  contract_start_date: string;
  resign_reason: string;
  resign_effective_date: string;
  resign_date: string;
  shift: EShift;
  grade_id: number;
  remark: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  department: IDepartment;
  position: IPosition;
  manager: IEmployee;
  marriage: IMarriage;
  benefits: IBenefit[];
  documents: IEmployeeDocument[];
}

export interface IEmployeeListItem {
  allowed_to_view_salary: number;
  attendance_allowance_paid: string;
  audit_salary: string;
  bank_account_no: string;
  bank_name: string;
  basic_salary: number;
  card_number: string;
  company_id: number;
  contract_start_date: string;
  department_id: number;
  department_name: string;
  dob: string;
  education_background: string;
  emergency_contract: string;
  emergency_name: string;
  emergency_relationship: string;
  entitle_ot: string;
  family_card_number: string;
  gender: number;
  grade_id: number;
  grade_name: string;
  grade_prefix: string;
  health_insurance: string;
  health_insurance_audit: string;
  health_insurance_no: string;
  hidden_on_payroll: string;
  home_address_1: string;
  home_address_2: string;
  id: number;
  ktp_no: string;
  marriage_code: string;
  marriage_id: number;
  meal_allowance: string;
  meal_allowance_paid: string;
  minimum_salary_used: string;
  mobile_no: string;
  mother_name: string;
  name: string;
  nc_id: string;
  old_staff_id: string;
  operational_allowance_paid: string;
  pob: string;
  position_id: number;
  position_name: string;
  remark: string;
  resign_date: string;
  resign_effective_date: string;
  resign_reason: string;
  safety_insurance: string;
  safety_insurance_audit: string;
  safety_insurance_no: string;
  shift: string;
  staff_id: string;
  tel_no: string;
  type: string;
  updated_at: string;
}

export interface IEmployeeState {
  employees: IEmployeeListItem[];
  last_page: number;
}

// Get Employees ---------------------------------------------
export interface IGetEmployeeListPayload {
  search?: string;
  page?: number;
}
export interface IGetEmployeeListResponse {
  current_page: number;
  last_page: number;
  data: IEmployeeListItem[];
}

// Create Employee -------------------------------------------
export interface ICreateEmployeePayload {
  name: string;
  card_number: string;
  gender: EGender | null; // Gender
  mother_name: string | null;
  dob: string;
  pob: string | null; // Place of birth
  ktp_no: string;
  nc_id: string; // National Card ID
  home_address_1: string | null;
  home_address_2: string | null;
  mobile_no: number | null;
  tel_no: number | null;
  marriage_id: number | null; // Marriage Status
  bank_account_no: number | null;
  bank_name: string | null;
  family_card_number: number | null;
  safety_insurance_no: number | null;
  health_insurance_no: number | null;
  department_id: number | null;
  position_id: number | null;
  shift: EShift | null; // Shift (1, 2)
  type: EType | null; // Employee Type (0: Permanent, 1: Part-time worker, 2: Contract worker)
  entitle_ot: number; // Entitle OT (0: unchecked, 1:checked)
  meal_allowance_paid: number; // Meal Allowance Paid (0: unchecked, 1:checked)
  operational_allowance_paid: number; // Operational Allowance Paid (0: unchecked, 1:checked)
  hidden_on_payroll: number; // 0 or 1
  attendance_allowance_paid: number; // Attendance Allowance Paid (0: unchecked, 1:checked)
  basic_salary: number;
  audit_salary: number;
  safety_insurance: number; // amount
  health_insurance: number; // amount
  contract_start_date: string; // Contract Start Date Format: yyyy-mm-dd
  grade_id: number | null;
  remark: string | null;
  benefits: number[];
  // account_user_id?: number; // User Id
}

// Get employee By Id ----------------------------------------
export interface IGetEmployeeByIdPayload {
  id: number;
}

// Update Employee -------------------------------------------
export interface IUpdateEmployeePayload extends ICreateEmployeePayload {
  id: number;
}

// Delete Multiple Employees ----------------------------------
export interface IDeleteMultipleEmployeesPayload {
  record_ids: number[];
}
