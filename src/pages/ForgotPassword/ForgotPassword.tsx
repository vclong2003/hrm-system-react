import * as S from "./ForgotPassword.styled";

import { Formik } from "formik";
import { Navigate } from "react-router-dom";

import { useState } from "react";
import { useSelector } from "react-redux";
import authService from "@services/auth";
import notiUtil from "@utils/notification";

import { IForgotPasswordPayload } from "@interfaces/auth";
import { RootState } from "@store/index";

const initialValues: IForgotPasswordPayload = {
  email: "",
};

export default function ForgotPassword() {
  const { user } = useSelector((state: RootState) => state.authState);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values: IForgotPasswordPayload) => {
    setLoading(true);
    authService
      .forgotPassword(values)
      .then(() => notiUtil.notifySuccess("Done, please check your email!"))
      .finally(() => setLoading(false));
  };

  return (
    <S.ForgotPassword>
      {user && <Navigate to="/" />}
      <S.Title variant="h4">Forgot Password</S.Title>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <S.Form>
          <S.InputLabel variant="body1">Your work email:</S.InputLabel>
          <S.FormInput type="email" name="email" />
          <S.ConfirmButton type="submit" size="large" disabled={loading}>
            Confirm & Send OTP
          </S.ConfirmButton>
          <S.BackToLoginContainer>
            <S.BackToLoginLink to="/login">Back to Login</S.BackToLoginLink>
          </S.BackToLoginContainer>
        </S.Form>
      </Formik>
    </S.ForgotPassword>
  );
}
