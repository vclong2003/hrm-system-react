import * as Yup from "yup";

export const employeeSchema = Yup.object().shape({
  // Employee Information -------------------------------------------
  name: Yup.string().required("Name is required"),
  gender: Yup.number().required(),
  mother_name: Yup.string().optional(),
  dob: Yup.string().required("Date of birth is required"),
  pob: Yup.string(),
  ktp_no: Yup.number().required("KTP No. is required"),
  nc_id: Yup.number().required("National Card is required"),
  home_address_1: Yup.string(),
  home_address_2: Yup.string(),
  mobile_no: Yup.number().nullable(),
  tel_no: Yup.number().nullable(),
  card_number: Yup.number().nullable(),
  bank_account_no: Yup.number().nullable(),
  bank_name: Yup.string().nullable(),
  family_card_number: Yup.number().nullable(),
  safety_insurance_no: Yup.number().nullable(),
  health_insurance_no: Yup.number().nullable(),

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
});
