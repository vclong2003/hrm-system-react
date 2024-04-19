export interface IEmployee {
  id: number;
  old_staff_id: string;
  staff_id: string;
  name: string;
  gender: number;
  department_id: number;
  company_id: number;
  marriage_id: number;
  position_id: number;
  type: string;
  mother_name: string;
  dob: string;
  pob: string;
  ktp_no: string;
  nc_id: string;
  home_address_1: string;
  home_address_2: string;
  mobile_no: string;
  tel_no: string;
  bank_account_no: string;
  bank_name: string;
  card_number: string;
  family_card_number: string;
  health_insurance_no: string;
  safety_insurance_no: string;
  education_background: string;
  emergency_contract: string;
  emergency_relationship: string;
  emergency_name: string;
  basic_salary: string;
  audit_salary: string;
  health_insurance: string;
  safety_insurance: string;
  safety_insurance_audit: string;
  health_insurance_audit: string;
  meal_allowance: string;
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
  shift: string;
  grade_id: number;
  remark: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  department_name: string;
  marriage_code: string;
  position_name: string;
  grade_prefix: string;
  grade_name: string;
  contracts: string[];
  users: string[];
  allowed_to_view_salary: number;
}

// Get Employees ---------------------------------------------
export interface IGetEmployeesPayload {
  search: string;
  page: number;
}

// Create Employee -------------------------------------------
export interface ICreateEmployeePayload {
  name: string;
  card_number: number;
  gender: number; // Gender
  mother_name: string;
  dob: string;
  pob: string; // Place of birth
  ktp_no: number;
  nc_id: number; // National Card ID
  home_address_1: string;
  home_address_2: string;
  mobile_no: number;
  tel_no: number;
  marriage_id: number; // Marriage Status
  bank_account_no: number;
  bank_name: string;
  family_card_number: number;
  safety_insurance_no: number;
  health_insurance_no: number;
  department_id: number;
  position_id: number;
  shift: string; // Shift (1, 2)
  type: number; // Employee Type (0: Permanent, 1: Part-time worker, 2: Contract worker)
  entitle_ot: string; // Entitle OT (0: unchecked, 1:checked)
  meal_allowance_paid: string; // Meal Allowance Paid (0: unchecked, 1:checked)
  operational_allowance_paid: string; // Operational Allowance Paid (0: unchecked, 1:checked)
  attendance_allowance_paid: string; // Attendance Allowance Paid (0: unchecked, 1:checked)
  basic_salary: number;
  audit_salary: number;
  safety_insurance: number;
  health_insurance: number;
  contract_start_date: string; // Contract Start Date Format: yyyy-mm-dd
  grade_id: number;
  remark: string;
  benefits: number[];
  account_user_id: number; // User Id
}

// Get employee By Id ----------------------------------------
export interface IGetEmployeeByIdPayload {
  id: number;
}

// Update Employee -------------------------------------------
export interface IUpdateEmployeePayload {
  id: number;
  name: string;
  card_number: number;
  gender: number; // Gender
  mother_name: string;
  dob: string; // Date of birth (Format: yyyy-mm-dd)
  pob: string; // Place of birth
  ktp_no: number;
  nc_id: number; // National Card ID
  home_address_1: string;
  home_address_2: string;
  mobile_no: number;
  tel_no: number;
  marriage_id: number; // Marriage Status
  bank_account_no: number;
  bank_name: string;
  family_card_number: number;
  safety_insurance_no: number;
  health_insurance_no: number;
  department_id: number;
  position_id: number;
  shift: string; // Shift (1, 2)
  type: number; // Employee Type (0: Permanent, 1: Part-time worker, 2: Contract worker)
  entitle_ot: string; // Entitle OT (0: unchecked, 1:checked)
  meal_allowance_paid: string; // Meal Allowance Paid (0: unchecked, 1:checked)
  operational_allowance_paid: string; // Operational Allowance Paid (0: unchecked, 1:checked)
  attendance_allowance_paid: string; // Attendance Allowance Paid (0: unchecked, 1:checked)
  basic_salary: number;
  audit_salary: number;
  safety_insurance: number;
  health_insurance: number;
  contract_start_date: string; // Contract Start Date Format: yyyy-mm-dd
  grade_id: number;
  remark: string;
  benefits: number[];
  account_user_id: number; // User Id
}

// Delete Multiple Employees ----------------------------------
export interface IDeleteMultipleEmployeesPayload {
  record_ids: number[];
}

// Get available employyee list for assign --------------------
export interface IGetAvailableForAssignPayload {
  id: string; // User id
  search: string;
  department_id: number;
  position_id: number;
}

// Get employee list for account user --------------------------
export interface IGetEmployeeListForAccountUserPayload {
  department_id: string;
  search: string;
}

// Get default salary -----------------------------------------
export interface IGetDefaultSalaryPayload {
  id: number; // Employee id
}

// Update employee documents ----------------------------------
export interface IUpdateEmployeeDocumentsPayload {
  employee_id: string;
  deleted_ids: string[];
  documents: File[];
}
