import EmployeeInformation from "./EmployeeInformation/EmployeeInfomation";
import ContractInformation from "./ContractInformation/ContractInformation";
import EmploymentDetails from "./EmploymentDetails/EmploymentDetails";
import SalaryAndWages from "./SalaryAndWages/SalaryAndWages";
import Others from "./Others/Others";

import useFormSelectOptions from "@hooks/employeeManagement/useFormSelectOptions";

import { ICreateEmployeePayload, IEmployee } from "@interfaces/employee";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import { useEffect } from "react";
import { useFormikContext } from "formik";

interface IFormsProps {
  tab: EFORM_TAB;
  employee?: IEmployee;
  onSetError: (tab: EFORM_TAB, isError: boolean) => void;
}
export default function Forms({ tab, employee, onSetError }: IFormsProps) {
  const { marriages, departments, positions, grades } = useFormSelectOptions();
  const { setFieldValue, resetForm } =
    useFormikContext<ICreateEmployeePayload>();

  // Set form values when employee is present (edit mode)
  useEffect(() => {
    if (!employee) {
      resetForm();
      return;
    }
    Object.entries(employee).forEach(([key, value]) => {
      setFieldValue(key, value);
    });
    setFieldValue("annual_leaves", null); // Quick fix
  }, [employee]);

  return (
    <>
      {tab === EFORM_TAB.EMPLOYEE_INFORMATION && (
        <EmployeeInformation
          nik={employee?.staff_id}
          marriages={marriages}
          setError={(isError) =>
            onSetError(EFORM_TAB.EMPLOYEE_INFORMATION, isError)
          }
        />
      )}
      {tab === EFORM_TAB.CONTRACT_INFORMATION && (
        <ContractInformation
          setError={(isError) =>
            onSetError(EFORM_TAB.CONTRACT_INFORMATION, isError)
          }
        />
      )}
      {tab === EFORM_TAB.EMPLOYMENT_DETAILS && (
        <EmploymentDetails
          departments={departments}
          positions={positions}
          setError={(isError) =>
            onSetError(EFORM_TAB.EMPLOYMENT_DETAILS, isError)
          }
        />
      )}
      {tab === EFORM_TAB.SALARY_AND_WAGES && (
        <SalaryAndWages
          setError={(isError) =>
            onSetError(EFORM_TAB.SALARY_AND_WAGES, isError)
          }
        />
      )}
      {tab === EFORM_TAB.OTHERS && (
        <Others
          grades={grades}
          setError={(isError) => onSetError(EFORM_TAB.OTHERS, isError)}
        />
      )}
    </>
  );
}
