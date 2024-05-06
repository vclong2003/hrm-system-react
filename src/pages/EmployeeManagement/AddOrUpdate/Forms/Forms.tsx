import EmployeeInformation from "./EmployeeInformation/EmployeeInfomation";
import ContractInformation from "./ContractInformation/ContractInformation";
import EmploymentDetails from "./EmploymentDetails/EmploymentDetails";
import SalaryAndWages from "./SalaryAndWages/SalaryAndWages";
import Others from "./Others/Others";

import useFormSelectOptions from "@hooks/employeeManagement/useFormSelectOptions";
import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useSelector } from "react-redux";

import { ICreateEmployeePayload } from "@interfaces/employee";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";
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
    console.log(employee);
  }, [employee]);

  useEffect(() => {
    validateForm();
    console.log(values);
  }, [values]);

  const formParts = {
    [EFORM_TAB.EMPLOYEE_INFORMATION]: (
      <EmployeeInformation marriages={marriages} />
    ),
    [EFORM_TAB.CONTRACT_INFORMATION]: <ContractInformation />,
    [EFORM_TAB.EMPLOYMENT_DETAILS]: (
      <EmploymentDetails departments={departments} positions={positions} />
    ),
    [EFORM_TAB.SALARY_AND_WAGES]: <SalaryAndWages />,
    [EFORM_TAB.OTHERS]: <Others grades={grades} benefits={benefits} />,
  };

  return formParts[tab];
}
