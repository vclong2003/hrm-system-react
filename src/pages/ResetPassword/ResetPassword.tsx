import * as S from "./ResetPassword.styled";

import { Formik } from "formik";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useQueryParams from "@hooks/useQueryParams";
import authService from "@services/auth";
import notiUtil from "@utils/notification";

import { IResetPasswordPayload } from "@interfaces/auth";
import { RootState } from "@store/index";

const initialValues: Partial<IResetPasswordPayload> = {
  password: "",
  password_confirmation: "",
};

export default function ResetPassword() {
  const navigate = useNavigate();
  const { getParam } = useQueryParams<"token" | "email" | "company_id">();
  const { user } = useSelector((state: RootState) => state.authState);

  if (!getParam("token") || !getParam("email") || !getParam("company_id")) {
    return <Navigate to="/" />;
  }

  const onSubmit = (values: Partial<IResetPasswordPayload>) => {
    authService
      .resetPassword({
        ...values,
        email: getParam("email"),
        company_id: Number(getParam("company_id")),
        token: getParam("token"),
      } as IResetPasswordPayload)
      .then(() =>
        notiUtil.notifySuccess("Password changed successfully! Redirecting...")
      )
      .then(() => navigate("/login"));
  };

  return (
    <S.ResetPassword>
      {user && <Navigate to="/" />}
      <S.Title variant="h4">Reset Password</S.Title>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <S.Form>
          <S.InnerTitle variant="h5">Please input password</S.InnerTitle>
          <S.Divider />
          <S.InputsContainer>
            <S.FormLabel variant="body1">New Password</S.FormLabel>
            <S.FormInput name="password" type="password" />
            <S.FormLabel variant="body1">Confirm New Password</S.FormLabel>
            <S.FormInput name="password_confirmation" type="password" />
            <S.ConfirmBtn type="submit" size="large">
              Confirm
            </S.ConfirmBtn>
          </S.InputsContainer>
        </S.Form>
      </Formik>
    </S.ResetPassword>
  );
}
