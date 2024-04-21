import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import * as S from "./EmployeeManagement.styled";

export default function EmployeeManagement() {
  return (
    <S.EmployeeManagement>
      <Breadcrumb
        items={[
          {
            title: "General",
          },
          {
            title: "Employee Management",
          },
        ]}
      />
    </S.EmployeeManagement>
  );
}
