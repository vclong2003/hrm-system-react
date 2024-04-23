import { EFORM_TAB } from "src/enums/employee-addOrCreate";
import EmployeeInformation from "./EmployeeInformation/EmployeeInfomation";
import ContractInformation from "./ContractInformation/ContractInformation";
import EmploymentDetails from "./EmploymentDetails/EmploymentDetails";
import SalaryAndWages from "./SalaryAndWages/SalaryAndWages";
import Others from "./Others/Others";
import useFormSelectOptions from "@hooks/employeeManagement/useFormSelectOptions";

interface IFormsProps {
  tab: EFORM_TAB;
  onSetError: (tab: EFORM_TAB, isError: boolean) => void;
}
export default function Forms({ tab, onSetError }: IFormsProps) {
  const { marriages, departments, positions, grades } = useFormSelectOptions();

  return (
    <>
      {tab === EFORM_TAB.EMPLOYEE_INFORMATION && (
        <EmployeeInformation
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
