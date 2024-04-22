import HorizontalMenu, {
  IMenuItem,
} from "@components/HorizontalMenu/HorizontalMenu";
import * as S from "./AddOrCreate.styled";
import { useState } from "react";
import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Typo from "@components/Typo/Typo";
import Forms from "../Forms";

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
      {/* Breadcrumb --------------------------------------------- */}
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
      {/* Page Heading ------------------------------------------- */}
      <PageHeading variant="add" />
      {/* Menu --------------------------------------------------- */}
      <S.MenuContainer>
        <HorizontalMenu
          items={MENU_LIST}
          onChange={setPage}
          currentKey={page}
        />
      </S.MenuContainer>
      {/* Form Container ----------------------------------------- */}
      <S.FormContainer>
        <S.FormHeading>
          <Typo variant="h4">Personal Information</Typo>
        </S.FormHeading>
        <S.Divider />
        {/* Form --------------------- */}
        <Forms />
      </S.FormContainer>
    </S.AddOrCreate>
  );
}
