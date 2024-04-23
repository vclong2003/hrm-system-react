import * as S from "./AddOrUpdate.styled";

import { Form, Formik } from "formik";
import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Typo from "@components/Typo/Typo";
import HorizontalMenu from "@components/HorizontalMenu/HorizontalMenu";
import Forms from "../Forms/Forms";

import { useMemo, useState } from "react";
import useFormErrors from "@hooks/employeeManagement/useFormErrors";
import { addEmployee } from "@variables/employeeManagement/breadcrumbs";
import employeeService from "@services/employee";
import notiUtils from "@utils/notification";

import { employeeSchema } from "@validations/employee";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import { FORM_TABS } from "@variables/employeeManagement/formTabs";
import { initialValues } from "@variables/employeeManagement/formInitialValues";
import { ICreateEmployeePayload } from "@interfaces/employee";

export default function AddOrUpdate() {
  const { errors, setTabError } = useFormErrors();
  const [formTab, setFormTab] = useState<string>(
    EFORM_TAB.EMPLOYEE_INFORMATION
  );

  const onAddEmployee = (values: ICreateEmployeePayload) => {
    console.log(values);
    employeeService
      .createEmployee(values)
      .then(() => notiUtils.notifySuccess("Employee added successfully!"));
  };

  const isSubmitDisabled = useMemo(
    () => Object.values(errors).some((error) => error),
    [errors]
  );

  return (
    <S.AddOrUpdate>
      <Breadcrumb items={addEmployee} />
      <Formik
        initialValues={initialValues}
        validationSchema={employeeSchema}
        onSubmit={onAddEmployee}>
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
            <Forms tab={formTab as EFORM_TAB} onSetError={setTabError} />
          </S.FormContainer>
        </Form>
      </Formik>
    </S.AddOrUpdate>
  );
}
