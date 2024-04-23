import { useState } from "react";
import { EFORM_TAB } from "../../enums/employee-addOrCreate";

export default function useFormErrors() {
  const [errors, setErrors] = useState({
    [EFORM_TAB.EMPLOYEE_INFORMATION]: false,
    [EFORM_TAB.CONTRACT_INFORMATION]: false,
    [EFORM_TAB.EMPLOYMENT_DETAILS]: false,
    [EFORM_TAB.SALARY_AND_WAGES]: false,
    [EFORM_TAB.OTHERS]: false,
  });

  const setTabError = (tab: EFORM_TAB, isError: boolean) => {
    setErrors((prev) => ({ ...prev, [tab]: isError }));
  };

  return { errors, setTabError };
}
