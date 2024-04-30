import * as S from "./AddOrUpdate.styled";

import { Form, Formik } from "formik";
import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Typo from "@components/Typo/Typo";
import HorizontalMenu from "@components/HorizontalMenu/HorizontalMenu";
import Forms from "./Forms/Forms";

import { useEffect, useMemo, useState } from "react";
import useFormErrors from "@hooks/employeeManagement/useFormErrors";
import { add, update } from "@variables/employeeManagement/breadcrumbs";
import employeeService from "@services/employee";
import notiUtils from "@utils/notification";

import { employeeSchema } from "@validations/employee";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import { FORM_TABS } from "@variables/employeeManagement/formTabs";
import { initialValues } from "@variables/employeeManagement/formInitialValues";
import { ICreateEmployeePayload } from "@interfaces/employee";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { getEmployeeById, setEmployee, updateEmployee } from "@store/employee";

export default function AddOrUpdate() {
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const [mode, setMode] = useState<"add" | "update">("add");
  const [formTab, setFormTab] = useState<string>(
    EFORM_TAB.EMPLOYEE_INFORMATION
  );
  const { errors, setTabError } = useFormErrors();

  const onAddEmployee = (values: ICreateEmployeePayload) => {
    employeeService
      .createEmployee(values)
      .then((employee) => navigate(`${employee.id}`))
      .then(() => notiUtils.notifySuccess("Employee added successfully!"));
  };
  const onUpdateEmployee = (values: ICreateEmployeePayload) => {
    dispatch(updateEmployee({ id: Number(employeeId), ...values }))
      .unwrap()
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
      dispatch(setEmployee(null));
      return;
    }
    // If employeeId is present -> update mode
    setMode("update");
    dispatch(getEmployeeById({ id: Number(employeeId) }))
      .unwrap()
      .then(() => setMode("update"))
      .catch(() => navigate(-1));
  }, [employeeId, navigate, dispatch]);

  return (
    <S.AddOrUpdate>
      <Breadcrumb items={mode === "update" ? update : add} />
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
            <Forms tab={formTab as EFORM_TAB} onSetError={setTabError} />
          </S.FormContainer>
        </Form>
      </Formik>
    </S.AddOrUpdate>
  );
}
