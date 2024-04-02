import { Outlet } from "react-router-dom";
import * as S from "./AuthPage.styled";
import LogoImage from "@assets/images/logo.png";
import Footer from "@components/Footer/Footer";

export default function AuthPage() {
  return (
    <S.AuthPage>
      <S.Logo>
        <S.LogoImage src={LogoImage} />
        <S.LogoText variant="h4">HR Management System</S.LogoText>
      </S.Logo>
      {/* Content goes here */}
      <Outlet />
      <Footer />
    </S.AuthPage>
  );
}
