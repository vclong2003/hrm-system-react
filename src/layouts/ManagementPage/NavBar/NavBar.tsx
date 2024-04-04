import * as S from "./NavBar.styled";
import Logo from "@assets/images/logo.png";

export default function NavBar() {
  return (
    <S.NavBar>
      <S.Logo>
        <S.LogoImage src={Logo} alt="Logo" />
        <S.LogoText variant="h4">HR Management System</S.LogoText>
      </S.Logo>
    </S.NavBar>
  );
}
