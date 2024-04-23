import * as S from "./AddOrCreate.styled";

import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Typo from "@components/Typo/Typo";
import HorizontalMenu from "@components/HorizontalMenu/HorizontalMenu";

// Forms --------------------------------------------------------------------------
import { Form, Formik } from "formik";
import EmployeeInformation from "../Forms/EmployeeInformation/EmployeeInfomation";
import ContractInformation from "../Forms/ContractInformation/ContractInformation";
import EmploymentDetails from "../Forms/EmploymentDetails/EmploymentDetails";
import SalaryAndWages from "../Forms/SalaryAndWages/SalaryAndWages";
import Others from "../Forms/Others/Others";

import { useMemo, useState } from "react";
import useFormData from "@hooks/employeeManagement/useFormData";
import useFormErrors from "@hooks/employeeManagement/useFormErrors";
import { addEmployee } from "@variables/employeeManagement/breadcrumbs";

import { employeeSchema } from "@validations/employee";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import { FORM_TABS } from "../../../variables/employeeManagement/formTabs";
import { initialValues } from "../../../variables/employeeManagement/formInitialValues";

export default function AddOrCreate() {
  const { marriages, departments, positions, grades } = useFormData();
  const { errors, setTabError } = useFormErrors();
  const [formTab, setFormTab] = useState<string>(
    EFORM_TAB.EMPLOYEE_INFORMATION
  );

  const isSubmitDisabled = useMemo(
    () => Object.values(errors).some((error) => error),
    [errors]
  );

  return (
    <S.AddOrCreate>
      <Breadcrumb items={addEmployee} />
      <Formik
        initialValues={initialValues}
        validationSchema={employeeSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        <Form>
          <PageHeading variant="add" disabled={isSubmitDisabled} />
          <S.MenuContainer>
            <HorizontalMenu
              items={FORM_TABS}
              errors={errors}
              onChange={setFormTab}
              currentKey={formTab}
            />
          </S.MenuContainer>
          <S.FormContainer>
            <S.FormHeading>
              <Typo variant="h4">
                {FORM_TABS.find((item) => item.key === formTab)?.label}
              </Typo>
            </S.FormHeading>
            <S.Divider />
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
