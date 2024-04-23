import * as S from "./AddOrCreate.styled";

import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Typo from "@components/Typo/Typo";
import { Form, Formik } from "formik";
// Forms --------------------------------------------------------------------------
import EmployeeInformation from "../Forms/EmployeeInformation/EmployeeInfomation";
import ContractInformation from "../Forms/ContractInformation/ContractInformation";
import EmploymentDetails from "../Forms/EmploymentDetails/EmploymentDetails";
import SalaryAndWages from "../Forms/SalaryAndWages/SalaryAndWages";
import Others from "../Forms/Others/Others";

import { useState } from "react";
import { employeeSchema } from "@validations/employee";

import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import { FORM_TABS } from "./formTabs";
import { initialValues } from "./formInitialValues";
import HorizontalMenu from "@components/HorizontalMenu/HorizontalMenu";
import useFormData from "@hooks/employeeManagement/useFormData";
import useFormErrors from "@hooks/employeeManagement/useFormErrors";

export default function AddOrCreate() {
  const { marriages, departments, positions, grades } = useFormData();
  const { errors, setTabError } = useFormErrors();
  const [formTab, setFormTab] = useState<string>(
    EFORM_TAB.EMPLOYEE_INFORMATION
  );

  console.log(errors);

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
          <PageHeading variant="add" disabled={false} />
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
              marriages={marriages}
              show={formTab === EFORM_TAB.EMPLOYEE_INFORMATION}
              setError={(isError) =>
                setTabError(EFORM_TAB.EMPLOYEE_INFORMATION, isError)
              }
            />
            <ContractInformation
              show={formTab === EFORM_TAB.CONTRACT_INFORMATION}
              setError={(isError) =>
                setTabError(EFORM_TAB.CONTRACT_INFORMATION, isError)
              }
            />
            <EmploymentDetails
              departments={departments}
              positions={positions}
              show={formTab === EFORM_TAB.EMPLOYMENT_DETAILS}
              setError={(isError) =>
                setTabError(EFORM_TAB.EMPLOYMENT_DETAILS, isError)
              }
            />
            <SalaryAndWages
              show={formTab === EFORM_TAB.SALARY_AND_WAGES}
              setError={(isError) =>
                setTabError(EFORM_TAB.SALARY_AND_WAGES, isError)
              }
            />
            <Others
              grades={grades}
              show={formTab === EFORM_TAB.OTHERS}
              setError={(isError) => setTabError(EFORM_TAB.OTHERS, isError)}
            />
          </S.FormContainer>
        </Form>
      </Formik>
    </S.AddOrCreate>
  );
}
