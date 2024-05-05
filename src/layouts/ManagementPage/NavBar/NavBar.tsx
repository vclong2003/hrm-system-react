import { useSelector } from "react-redux";
import * as S from "./NavBar.styled";
import Logo from "@assets/images/logo.png";
import { RootState } from "@store/index";
import UserActions from "../UserActions/UserActions";

export default function NavBar() {
  const { user } = useSelector((state: RootState) => state.authState);
  console.log(user);
  return (
    <S.NavBar>
      <S.Logo>
        <S.LogoImage src={Logo} alt="Logo" />
        <S.LogoText variant="h4">HR Management System</S.LogoText>
      </S.Logo>
      <S.Divider />
      <UserActions />
    </S.NavBar>
  );
}
