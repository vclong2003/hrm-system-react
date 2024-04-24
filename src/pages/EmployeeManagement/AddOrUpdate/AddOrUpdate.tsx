import * as S from "./AddOrUpdate.styled";

import { Form, Formik } from "formik";
import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Typo from "@components/Typo/Typo";
import HorizontalMenu from "@components/HorizontalMenu/HorizontalMenu";
import Forms from "../Forms/Forms";

import { useEffect, useMemo, useState } from "react";
import useFormErrors from "@hooks/employeeManagement/useFormErrors";
import {
  addEmployee,
  updateEmployee,
} from "@variables/employeeManagement/breadcrumbs";
import employeeService from "@services/employee";
import notiUtils from "@utils/notification";

import { employeeSchema } from "@validations/employee";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import { FORM_TABS } from "@variables/employeeManagement/formTabs";
import { initialValues } from "@variables/employeeManagement/formInitialValues";
import { ICreateEmployeePayload, IEmployee } from "@interfaces/employee";
import { useNavigate, useParams } from "react-router-dom";

export default function AddOrUpdate() {
  const navigate = useNavigate();
  const { employeeId } = useParams();

  const [mode, setMode] = useState<"add" | "update">("add");
  const [employee, setEmployee] = useState<IEmployee>();
  const [formTab, setFormTab] = useState<string>(
    EFORM_TAB.EMPLOYEE_INFORMATION
  );
  const { errors, setTabError } = useFormErrors();

  const onAddEmployee = (values: ICreateEmployeePayload) => {
    employeeService
      .createEmployee(values)
      .then(() => notiUtils.notifySuccess("Employee added successfully!"));
  };
  const onUpdateEmployee = (values: ICreateEmployeePayload) => {
    employeeService
      .updateEmployee({ id: Number(employeeId), ...values })
      .then(() => notiUtils.notifySuccess("Employee updated successfully!"));
  };

  const isSubmitDisabled = useMemo(
    () => Object.values(errors).some((error) => error),
    [errors]
  );

  useEffect(() => {
    // If employeeId is not present -> add mode
    if (!employeeId) {
      setMode("add");
      setEmployee(undefined);
      return;
    }
    // If employeeId is present -> update mode
    setMode("update");
    employeeService
      .getEmployeeById({ id: Number(employeeId) })
      .then((data) => setEmployee(data))
      .catch(() => navigate(-1));
  }, [employeeId, navigate]);

  return (
    <S.AddOrUpdate>
      <Breadcrumb items={mode === "update" ? updateEmployee : addEmployee} />
      <Formik
        initialValues={initialValues}
        validationSchema={employeeSchema}
        onSubmit={mode === "add" ? onAddEmployee : onUpdateEmployee}>
        <Form>
          <PageHeading variant={mode} disabled={isSubmitDisabled} />
          <S.MenuContainer>
            {/* Menu tab --------------------------------------------- */}
            <HorizontalMenu
              items={FORM_TABS}
              errors={errors}
              onChange={setFormTab}
              currentKey={formTab}
            />
          </S.MenuContainer>
          <S.FormContainer>
            {/* Form Title -------------------------------------------- */}
            <S.FormHeading>
              <Typo variant="h4">
                {FORM_TABS.find((item) => item.key === formTab)?.label}
              </Typo>
            </S.FormHeading>
            <S.Divider />
            {/* Forms -------------------------------------------------- */}
            <Forms
              tab={formTab as EFORM_TAB}
              employee={employee}
              onSetError={setTabError}
            />
          </S.FormContainer>
        </Form>
      </Formik>
    </S.AddOrUpdate>
  );
}
