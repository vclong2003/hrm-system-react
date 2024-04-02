import { Outlet } from "react-router-dom";
import * as S from "./ManagementPage.styled";

export default function ManagementPage() {
  return (
    <S.StyledManagementPage>
      <Outlet />
    </S.StyledManagementPage>
  );
}
