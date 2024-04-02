import { Formik } from "formik";
import * as S from "./Login.styled";
import { Select as AntSelect } from "antd";

export default function Login() {
  return (
    <S.Login>
      <S.Title variant="h4">Sign In</S.Title>
      <Formik>
        <S.Form>
          <S.InputLabel variant="body1">Username:</S.InputLabel>
          <S.FormInput type="text" name="username" />

          <S.InputLabel variant="body1">Password:</S.InputLabel>
          <S.FormInput type="password" name="password" />

          <S.InputLabel variant="body1">Factory:</S.InputLabel>
          <S.FormSelect>
            <AntSelect.Option value="1">Factory 1</AntSelect.Option>
            <AntSelect.Option value="2">Factory 2</AntSelect.Option>
          </S.FormSelect>

          <S.LoginButton type="submit">Login</S.LoginButton>
          <S.ForgotPasswordContainer>
            <S.ForgotPasswordLink to="#">
              Forgot Your Password?
            </S.ForgotPasswordLink>
          </S.ForgotPasswordContainer>
        </S.Form>
      </Formik>
    </S.Login>
  );
}
