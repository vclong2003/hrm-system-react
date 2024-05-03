import * as S from "./Login.styled";

import { Formik } from "formik";
import { Select as AntSelect } from "antd";
import { Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import companyService from "@services/company";
import { login } from "@store/auth";

import { ICompany } from "@interfaces/company";
import { ILoginPayload } from "@interfaces/auth";
import { AppDispatch, RootState } from "@store/index";

import { loginSchema } from "@validations/login";
import { initialValues } from "@variables/auth/loginForm";
import { Input, Select } from "@components/formComponents";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.authState);
  const [companies, setCompanies] = useState<ICompany[]>([]);

  useEffect(() => {
    companyService.getCompanyList().then((data) => setCompanies(data));
  }, []);

  const onSubmit = (values: ILoginPayload) => {
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
        {({ errors }) => (
          <S.Form>
            {/* Username ----------------------------------------------------- */}
            <S.FormGroup>
              <S.InputLabel variant="body1">Username:</S.InputLabel>
              <Input type="text" name="username" error={errors.username} />
            </S.FormGroup>

            {/* Password ----------------------------------------------------- */}
            <S.FormGroup>
              <S.InputLabel variant="body1">Password:</S.InputLabel>
              <Input type="password" name="password" error={errors.password} />
            </S.FormGroup>

            {/* Company ----------------------------------------------------- */}
            <S.FormGroup>
              <S.InputLabel variant="body1">Factory:</S.InputLabel>
              <Select name="company_id" error={errors.company_id}>
                <AntSelect.Option value={0}>Select Company</AntSelect.Option>
                {companies.map((company) => (
                  <AntSelect.Option key={company.id} value={company.id}>
                    {company.name}
                  </AntSelect.Option>
                ))}
              </Select>
            </S.FormGroup>

            <S.LoginButton size="large" type="submit">
              Login
            </S.LoginButton>
            <S.ForgotPasswordContainer>
              <S.ForgotPasswordLink to="#">
                Forgot Your Password?
              </S.ForgotPasswordLink>
            </S.ForgotPasswordContainer>
          </S.Form>
        )}
      </Formik>
    </S.Login>
  );
}
