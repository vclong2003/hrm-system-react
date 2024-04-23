import * as Yup from "yup";

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
  card_number: Yup.string(),
  bank_account_no: Yup.string(),
  bank_name: Yup.string(),
  family_card_number: Yup.string(),
  safety_insurance_no: Yup.string(),
  health_insurance_no: Yup.string(),

  // Contract Information --------------------------------------------
  contract_start_date: Yup.string().required(),
  type: Yup.string().required(),

  // Employee Details -----------------------------------------------
  shift: Yup.string().required(),

  // Salary and Wages ------------------------------------------------
  basic_salary: Yup.number().required(),
  audit_salary: Yup.number().required(),
  safety_insurance: Yup.number().required(),
  health_insurance: Yup.number().required(),

  // Others ----------------------------------------------------------
  benefits: Yup.array(),
  remark: Yup.string(),
});
