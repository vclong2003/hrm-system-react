import CopyrightNotice from "@components/CopyrightNotice/CopyrightNotice";
import Logo from "../Logo/Logo";
import * as S from "./Login.styled";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {
  return (
    <S.Login>
      <Logo />
      <S.PageTitle>Sign in</S.PageTitle>
      <LoginForm />
      <CopyrightNotice />
    </S.Login>
  );
}
