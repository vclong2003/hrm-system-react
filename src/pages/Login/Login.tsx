import { Formik } from "formik";
import * as S from "./Login.styled";
import { Select as AntSelect } from "antd";
import { useEffect, useState } from "react";
import { ICompany } from "@interfaces/company";
import companyService from "@services/company";
import { ILoginPayload } from "@interfaces/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/index";
import { Navigate } from "react-router-dom";
import { login } from "@store/auth";
import { loginSchema } from "@validations/login";

const initialValues: ILoginPayload = {
  username: "",
  password: "",
  company_id: 0,
};

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.authState);
  const [companies, setCompanies] = useState<ICompany[]>([]);

  useEffect(() => {
    companyService.getCompanyList().then((data) => setCompanies(data));
  }, []);

  const onSubmit = (values: ILoginPayload) => {
    console.log(values);
    dispatch(login(values));
  };

  return (
    <S.Login>
      {user && <Navigate to="/" />}
      <S.Title variant="h4">Sign In</S.Title>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={loginSchema}>
        <S.Form>
          <S.InputLabel variant="body1">Username:</S.InputLabel>
          <S.FormInput type="text" name="username" />

          <S.InputLabel variant="body1">Password:</S.InputLabel>
          <S.FormInput type="password" name="password" />

          <S.InputLabel variant="body1">Factory:</S.InputLabel>
          <S.FormSelect name="company_id">
            {companies.map((company) => (
              <AntSelect.Option key={company.id} value={company.id}>
                {company.name}
              </AntSelect.Option>
            ))}
          </S.FormSelect>

          <S.LoginButton size="large" type="submit">
            Login
          </S.LoginButton>
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
