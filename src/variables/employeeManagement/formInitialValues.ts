import { ICreateEmployeePayload } from "@interfaces/employee";

export const initialValues: ICreateEmployeePayload = {
  // Employee Information -------------------------------------------
  name: "",
  gender: null,
  mother_name: "",
  dob: "",
  pob: "",
  ktp_no: "",
  nc_id: "",
  home_address_1: "",
  home_address_2: "",
  mobile_no: null,
  tel_no: null,
  marriage_id: null,
  card_number: "",
  bank_account_no: null,
  bank_name: "",
  family_card_number: null,
  safety_insurance_no: null,
  health_insurance_no: null,

  // Contract Information --------------------------------------------
  contract_start_date: "",
  type: null,

  // Employment Details ----------------------------------------------
  department_id: null,
  position_id: null,
  shift: null,
  entitle_ot: 0,
  meal_allowance_paid: 0,
  operational_allowance_paid: 0,
  attendance_allowance_paid: 0,
  hidden_on_payroll: 0,

  // Salary and Wages ------------------------------------------------
  basic_salary: 0,
  audit_salary: 0,
  safety_insurance: 0,
  health_insurance: 0,

  // Others ----------------------------------------------------------
  grade_id: null,
  benefits: [],
  remark: null,
};
