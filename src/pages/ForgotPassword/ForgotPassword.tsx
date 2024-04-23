import * as S from "./ForgotPassword.styled";
import { Formik } from "formik";

export default function ForgotPassword() {
  return (
    <S.ForgotPassword>
      <S.Title variant="h3">Forgot Password</S.Title>
      <Formik>
        <S.Form>
          <S.InputLabel variant="body1">Your work email:</S.InputLabel>
          <S.FormInput type="email" name="email" />

          <S.ConfirmButton type="submit">Confirm & Send OTP</S.ConfirmButton>
          <S.BackToLoginContainer>
            <S.BackToLoginLink to="#">Back to Login</S.BackToLoginLink>
          </S.BackToLoginContainer>
        </S.Form>
      </Formik>
    </S.ForgotPassword>
  );
}
