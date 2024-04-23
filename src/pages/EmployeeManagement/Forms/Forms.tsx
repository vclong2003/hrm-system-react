import { Form, Formik } from "formik";
import EmployeeInformation from "./EmployeeInformation/EmployeeInfomation";
import { ICreateEmployeePayload } from "@interfaces/employee";
import { employeeSchema } from "@validations/employee";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import ContractInformation from "./ContractInformation/ContractInformation";

const initialValues: ICreateEmployeePayload = {
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

  // Employment Details ----------------------------------------------
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

interface IFormsProps {
  tab: EFORM_TAB;
  onError: (tab: EFORM_TAB) => void;
  onSave: (values: ICreateEmployeePayload) => void;
}
export default function Forms({ tab, onError, onSave }: IFormsProps) {
  return (
    <Formik
      onSubmit={onSave}
      initialValues={initialValues}
      validationSchema={employeeSchema}>
      <Form>
        <EmployeeInformation show={tab === EFORM_TAB.EMPLOYEE_INFORMATION} />
        <ContractInformation show={tab === EFORM_TAB.CONTRACT_INFORMATION} />
      </Form>
    </Formik>
  );
}
