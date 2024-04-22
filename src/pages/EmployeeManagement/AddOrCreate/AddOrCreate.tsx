import HorizontalMenu, {
  IMenuItem,
} from "@components/HorizontalMenu/HorizontalMenu";
import * as S from "./AddOrCreate.styled";
import { useState } from "react";
import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";

enum EPAGE {
  EMPLOYEE_INFORMATION = "employee-information",
  CONTRACT_INFORMATION = "contract-information",
  EMPLOYEE_DETAILS = "employee-details",
  SALARY_AND_WAGES = "salary-and-wages",
  OTHERS = "others",
}

const MENU_LIST: IMenuItem[] = [
  {
    label: "Employee Information",
    key: EPAGE.EMPLOYEE_INFORMATION,
  },
  {
    label: "Contract Information",
    key: EPAGE.CONTRACT_INFORMATION,
  },
  {
    label: "Employee Details",
    key: EPAGE.EMPLOYEE_DETAILS,
  },
  {
    label: "Salary & Wages",
    key: EPAGE.SALARY_AND_WAGES,
  },
  {
    label: "Others",
    key: EPAGE.OTHERS,
  },
];

export default function AddOrCreate() {
  const [page, setPage] = useState<string>(EPAGE.EMPLOYEE_INFORMATION);

  return (
    <S.AddOrCreate>
      <Breadcrumb
        items={[
          { title: "General" },
          {
            path: "employee",
            title: "Employee Management",
          },
          { title: "Add Employee" },
        ]}
      />
      <PageHeading variant="add" />
      <S.MenuContainer>
        <HorizontalMenu
          items={MENU_LIST}
          onChange={setPage}
          currentKey={page}
        />
      </S.MenuContainer>
    </S.AddOrCreate>
  );
}
