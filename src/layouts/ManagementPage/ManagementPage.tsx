import { Outlet } from "react-router-dom";
import * as S from "./ManagementPage.styled";
import NavBar from "./NavBar/NavBar";
import Drawer from "./Drawer/Drawer";

export default function ManagementPage() {
  return (
    <S.ManagementPage>
      <NavBar />
      <Drawer />
      <Outlet />
    </S.ManagementPage>
  );
}
