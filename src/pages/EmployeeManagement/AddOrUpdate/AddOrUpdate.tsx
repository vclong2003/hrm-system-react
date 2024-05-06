import * as S from "./AddOrUpdate.styled";

import { Form, Formik } from "formik";
import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Typo from "@components/Typo/Typo";
import HorizontalMenu from "@components/HorizontalMenu/HorizontalMenu";
import Forms from "./Forms/Forms";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeById, setEmployee, updateEmployee } from "@store/employee";
import employeeService from "@services/employee";
import notiUtils from "@utils/notification";
import helper from "@helpers/employeeManagement/form";

import { ICreateEmployeePayload } from "@interfaces/employee";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import { FORM_TABS } from "@variables/employeeManagement/formTabs";
import { add, update } from "@variables/employeeManagement/breadcrumbs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { employeeSchema } from "@validations/employee";
import { initialValues } from "@variables/employeeManagement/formInitialValues";

export default function AddOrUpdate() {
  const { employeeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [mode, setMode] = useState<"add" | "update">("add");
  const [loading, setLoading] = useState(false);
  const [formTab, setFormTab] = useState<string>(
    EFORM_TAB.EMPLOYEE_INFORMATION
  );

  const onAddEmployee = (values: ICreateEmployeePayload) => {
    setLoading(true);
    employeeService
      .createEmployee(values)
      .then((employee) => navigate(`${employee.id}`))
      .then(() => notiUtils.notifySuccess("Employee added successfully!"))
      .finally(() => setLoading(false));
  };
  const onUpdateEmployee = (values: ICreateEmployeePayload) => {
    console.log(values);
    setLoading(true);
    dispatch(updateEmployee({ id: Number(employeeId), ...values }))
      .unwrap()
      .then(() => notiUtils.notifySuccess("Employee updated successfully!"))
      .finally(() => setLoading(false));
  };

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
      .catch(() => navigate("/employee"));
  }, [employeeId, navigate, dispatch]);

  return (
    <S.AddOrUpdate>
      <Breadcrumb items={mode === "update" ? update : add} />
      <Formik
        validateOnMount
        initialValues={initialValues}
        validationSchema={employeeSchema}
        onSubmit={mode === "add" ? onAddEmployee : onUpdateEmployee}>
        {({ errors, isValid }) => (
          <Form>
            <PageHeading variant={mode} disabled={!isValid} loading={loading} />
            <S.MenuContainer>
              {/* Menu tab --------------------------------------------- */}
              <HorizontalMenu
                items={FORM_TABS}
                errors={{
                  [EFORM_TAB.EMPLOYEE_INFORMATION]:
                    helper.checkEmployeeInfoErrors(errors),
                  [EFORM_TAB.CONTRACT_INFORMATION]:
                    helper.checkContractInfoError(errors),
                  [EFORM_TAB.EMPLOYMENT_DETAILS]:
                    helper.checkEmploymentInfoError(errors),
                  [EFORM_TAB.SALARY_AND_WAGES]:
                    helper.checkSalaryAndWagesError(errors),
                  [EFORM_TAB.OTHERS]: helper.checkOtherInfoError(errors),
                }}
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
              <Forms tab={formTab as EFORM_TAB} />
            </S.FormContainer>
          </Form>
        )}
      </Formik>
    </S.AddOrUpdate>
  );
}
