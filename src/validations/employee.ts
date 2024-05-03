import * as Yup from "yup";

export const employeeSchema = Yup.object().shape({
  // Employee Information -------------------------------------------
  name: Yup.string().required("Name is required"),
  gender: Yup.number().required("Gender is required"),
  mother_name: Yup.string().optional(),
  dob: Yup.string().required("Date of birth is required"),
  pob: Yup.string(),
  ktp_no: Yup.number()
    .required("KTP No. is required")
    .typeError("KTP must be a number"),
  nc_id: Yup.number()
    .required("National Card is required")
    .typeError("NC must be a number"),
  home_address_1: Yup.string(),
  home_address_2: Yup.string(),
  mobile_no: Yup.number().nullable().typeError("Mobile must be a number"),
  tel_no: Yup.number().nullable().typeError("Telephone must be a number"),
  card_number: Yup.number()
    .nullable()
    .typeError("Card Number must be a number"),
  bank_account_no: Yup.number()
    .nullable()
    .typeError("Bank Account must be a number"),
  bank_name: Yup.string(),
  family_card_number: Yup.number()
    .nullable()
    .typeError("Family Card must be a number"),
  safety_insurance_no: Yup.number()
    .nullable()
    .typeError("Insurance No. must be a number"),
  health_insurance_no: Yup.number()
    .nullable()
    .typeError("Insurance No. must be a number"),

  // Contract Information --------------------------------------------
  contract_start_date: Yup.string().required("Start Date is required"),
  type: Yup.string().required("Contract Type is required"),

  // Employee Details -----------------------------------------------
  shift: Yup.string().required("Shift is required"),

  // Salary and Wages ------------------------------------------------
  basic_salary: Yup.number()
    .required("Basic Wage is required")
    .typeError("Basic Wage must be a number"),
  audit_salary: Yup.number()
    .required("Audit Wage is required")
    .typeError("Audit Wage must be a number"),
  safety_insurance: Yup.number()
    .required("Insurance is required")
    .typeError("Insurance must be a number"),
  health_insurance: Yup.number()
    .required("Insurance is required")
    .typeError("Insurance must be a number"),

  // Others ----------------------------------------------------------
  benefits: Yup.array(),
});
