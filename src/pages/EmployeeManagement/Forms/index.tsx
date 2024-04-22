import { Formik } from "formik";
import EmployeeInformation from "./EmployeeInformation/EmployeeInfomation";
import { ICreateEmployeePayload } from "@interfaces/employee";

const initialValues: Partial<ICreateEmployeePayload> = {
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
};

export default function Forms() {
  return (
    <Formik>
      <EmployeeInformation />
    </Formik>
  );
}
