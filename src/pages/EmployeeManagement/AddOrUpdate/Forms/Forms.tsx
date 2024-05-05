import EmployeeInformation from "./EmployeeInformation/EmployeeInfomation";
import ContractInformation from "./ContractInformation/ContractInformation";
import EmploymentDetails from "./EmploymentDetails/EmploymentDetails";
import SalaryAndWages from "./SalaryAndWages/SalaryAndWages";
import Others from "./Others/Others";

import useFormSelectOptions from "@hooks/employeeManagement/useFormSelectOptions";

import { ICreateEmployeePayload } from "@interfaces/employee";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

interface IFormsProps {
  tab: EFORM_TAB;
}
export default function Forms({ tab }: IFormsProps) {
  const { employee } = useSelector((state: RootState) => state.employeeState);
  const { marriages, departments, positions, grades, benefits } =
    useFormSelectOptions();
  const { setFieldValue, values, validateForm, resetForm } =
    useFormikContext<ICreateEmployeePayload>();

  useEffect(() => {
    resetForm();

    if (!employee) return;
    // Set form values when employee is present (edit mode)
    Object.entries(employee).forEach(([key, value]) => {
      setFieldValue(key, value);
    });
    // Quick fix
    setFieldValue("annual_leaves", null);
    // Santinize benefits
    setFieldValue(
      "benefits",
      employee.benefits.map((b) => b.id)
    );
  }, [employee]);

  useEffect(() => {
    validateForm();
  }, [values]);

  return (
    <>
      {tab === EFORM_TAB.EMPLOYEE_INFORMATION && (
        <EmployeeInformation nik={employee?.staff_id} marriages={marriages} />
      )}
      {tab === EFORM_TAB.CONTRACT_INFORMATION && <ContractInformation />}
      {tab === EFORM_TAB.EMPLOYMENT_DETAILS && (
        <EmploymentDetails departments={departments} positions={positions} />
      )}
      {tab === EFORM_TAB.SALARY_AND_WAGES && <SalaryAndWages />}
      {tab === EFORM_TAB.OTHERS && (
        <Others grades={grades} benefits={benefits} />
      )}
    </>
  );
}
