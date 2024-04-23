import * as S from "./ManagementPage.styled";
import NavBar from "./NavBar/NavBar";
import Drawer from "./Drawer/Drawer";
import Footer from "@components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function ManagementPage() {
  return (
    <S.ManagementPage>
      {/* Horizontal Nav ---------------- */}
      <NavBar />
      {/* Vertical Nav ------------------ */}
      <Drawer />
      <S.ContentContainer>
        {/* Content ------------ */}
        <Outlet />
        {/* End of content ----- */}
        <Footer />
      </S.ContentContainer>
    </S.ManagementPage>
  );
}
