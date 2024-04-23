import HorizontalMenu, {
  IMenuItem,
} from "@components/HorizontalMenu/HorizontalMenu";
import * as S from "./AddOrCreate.styled";
import { useState } from "react";
import PageHeading from "../PageHeading/PageHeading";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import Typo from "@components/Typo/Typo";
import Forms from "../Forms/Forms";
import { EFORM_TAB } from "src/enums/employee-addOrCreate";

const MENU_LIST: IMenuItem[] = [
  {
    label: "Employee Information",
    key: EFORM_TAB.EMPLOYEE_INFORMATION,
  },
  {
    label: "Contract Information",
    key: EFORM_TAB.CONTRACT_INFORMATION,
  },
  {
    label: "Employee Details",
    key: EFORM_TAB.EMPLOYEE_DETAILS,
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

export default function AddOrCreate() {
  const [formTab, setFormTab] = useState<string>(
    EFORM_TAB.EMPLOYEE_INFORMATION
  );

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
          onChange={setFormTab}
          currentKey={formTab}
        />
      </S.MenuContainer>
      {/* Form Container ----------------------------------------- */}
      <S.FormContainer>
        <S.FormHeading>
          <Typo variant="h4">
            {MENU_LIST.find((item) => item.key === formTab)?.label}
          </Typo>
        </S.FormHeading>
        <S.Divider />
        {/* Form --------------------- */}
        <Forms
          tab={formTab as EFORM_TAB}
          onSave={() => {}}
          onError={() => {}}
        />
      </S.FormContainer>
    </S.AddOrCreate>
  );
}
