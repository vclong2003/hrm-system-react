import * as S from "./AddOrCreate.styled";

import HorizontalMenu, {
  IMenuItem,
} from "@components/HorizontalMenu/HorizontalMenu";
import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Typo from "@components/Typo/Typo";
import { Form, Formik } from "formik";
// Forms --------------------------------------------------------------------------
import EmployeeInformation from "../Forms/EmployeeInformation/EmployeeInfomation";
import ContractInformation from "../Forms/ContractInformation/ContractInformation";
import EmploymentDetails from "../Forms/EmploymentDetails/EmploymentDetails";
import Others from "../Forms/Others/Others";
import SalaryAndWages from "../Forms/SalaryAndWages/SalaryAndWages";

import { useState } from "react";
import { employeeSchema } from "@validations/employee";

import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import { ICreateEmployeePayload } from "@interfaces/employee";
import { FORM_TABS } from "./formTabs";

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

export default function AddOrCreate() {
  const [formTab, setFormTab] = useState<string>(
    EFORM_TAB.EMPLOYEE_INFORMATION
  );

  return (
    <S.AddOrCreate>
      {/* Breadcrumb --------------------------------------------- */}
      <Breadcrumb
        items={[
          { title: "General" },
          {
            path: "employee",
            title: "Employee Management",
          },
          { title: "Add Employee" },
        ]}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={employeeSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        <Form>
          {/* Page Heading ------------------------------------------- */}
          <PageHeading variant="add" />
          {/* Menu --------------------------------------------------- */}
          <S.MenuContainer>
            <HorizontalMenu
              items={FORM_TABS}
              onChange={setFormTab}
              currentKey={formTab}
            />
          </S.MenuContainer>
          {/* Form Container ----------------------------------------- */}
          <S.FormContainer>
            <S.FormHeading>
              <Typo variant="h4">
                {FORM_TABS.find((item) => item.key === formTab)?.label}
              </Typo>
            </S.FormHeading>
            <S.Divider />
            {/* Forms ------------------------------------------------- */}
            <EmployeeInformation
              show={formTab === EFORM_TAB.EMPLOYEE_INFORMATION}
            />
            <ContractInformation
              show={formTab === EFORM_TAB.CONTRACT_INFORMATION}
            />
            <EmploymentDetails
              show={formTab === EFORM_TAB.EMPLOYMENT_DETAILS}
            />
            <SalaryAndWages show={formTab === EFORM_TAB.SALARY_AND_WAGES} />
            <Others show={formTab === EFORM_TAB.OTHERS} />
          </S.FormContainer>
        </Form>
      </Formik>
    </S.AddOrCreate>
  );
}
