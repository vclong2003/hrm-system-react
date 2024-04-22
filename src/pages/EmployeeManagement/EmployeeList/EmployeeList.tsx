import * as S from "./EmployeeList.styled.ts";
import PageHeading from "../PageHeading/PageHeading.tsx";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb.tsx";

export default function EmployeeList() {
  return (
    <S.EmployeeList>
      <Breadcrumb
        items={[
          { title: "General" },
          {
            title: "Employee Management",
          },
        ]}
      />
      <PageHeading variant="search" />
      {/* Table container --------------- */}
    </S.EmployeeList>
  );
}
