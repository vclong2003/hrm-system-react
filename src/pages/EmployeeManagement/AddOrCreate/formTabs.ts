import { IMenuItem } from "@components/HorizontalMenu/HorizontalMenu";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";

export const FORM_TABS: IMenuItem[] = [
  {
    label: "Employee Information",
    key: EFORM_TAB.EMPLOYEE_INFORMATION,
  },
  {
    label: "Contract Information",
    key: EFORM_TAB.CONTRACT_INFORMATION,
  },
  {
    label: "Employment Details",
    key: EFORM_TAB.EMPLOYMENT_DETAILS,
  },
  {
    label: "Salary & Wages",
    key: EFORM_TAB.SALARY_AND_WAGES,
  },
  {
    label: "Others",
    key: EFORM_TAB.OTHERS,
  },
];
