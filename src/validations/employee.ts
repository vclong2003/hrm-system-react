import * as Yup from "yup";

/*
// Employee Information -------------------------------------------
  name: "",
  gender: "",
  mother_name: "",
  dob: "",
  pob: "",
  ktp_no: "",
  nc_id: "",
  home_address_1: "",
  home_address_2: "",
  mobile_no: "",
  tel_no: "",
  marriage_id: 0,
  card_number: "",
  bank_account_no: "",
  bank_name: "",
  family_card_number: "",
  safety_insurance_no: "",
  health_insurance_no: "",

  // Contract Information --------------------------------------------
  contract_start_date: "",
  type: "",

  // Employee Details -----------------------------------------------
  department_id: 0,
  position_id: 0,
  shift: "",
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
  grade_id: 0,
  benefits: [],
  remark: "",
*/

export const employeeSchema = Yup.object().shape({
  // Employee Information -------------------------------------------
  name: Yup.string().required("Name is required"),
  gender: Yup.number().required(),
  mother_name: Yup.string(),
  dob: Yup.string().required("Date of birth is required"),
  pob: Yup.string(),
  ktp_no: Yup.string().required("KTP No. is required"),
  nc_id: Yup.string().required("National Card is required"),
  home_address_1: Yup.string(),
  home_address_2: Yup.string(),
  mobile_no: Yup.string(),
  tel_no: Yup.string(),
  marriage_id: Yup.number(),
  card_number: Yup.string(),
  bank_account_no: Yup.string(),
  bank_name: Yup.string(),
  family_card_number: Yup.string(),
  safety_insurance_no: Yup.string(),
  health_insurance_no: Yup.string(),

  // Contract Information --------------------------------------------
  contract_start_date: Yup.string().required(""),
  type: Yup.string().required(""),

  // Employee Details -----------------------------------------------
  department_id: Yup.number(),
  position_id: Yup.number(),
  shift: Yup.string().required(),
  entitle_ot: Yup.number().required(),
  meal_allowance_paid: Yup.number().required(),
  operational_allowance_paid: Yup.number().required(),
  attendance_allowance_paid: Yup.number().required(),
  hidden_on_payroll: Yup.number().required(),

  // Salary and Wages ------------------------------------------------
  basic_salary: Yup.number().required(),
  audit_salary: Yup.number().required(),
  safety_insurance: Yup.number().required(),
  health_insurance: Yup.number().required(),

  // Others ----------------------------------------------------------
  grade_id: Yup.number(),
  benefits: Yup.array(),
  remark: Yup.string(),
});
