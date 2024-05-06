import * as S from "./ChangePassword.styled";

import Typo from "@components/Typo/Typo";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import { Form, Formik } from "formik";
import { Col } from "antd";
import { Input } from "@components/formComponents";

import { useState } from "react";
import { useSelector } from "react-redux";
import authService from "@services/auth";
import notiUtil from "@utils/notification";

import { IChangePasswordPayload } from "@interfaces/auth";
import { RootState } from "@store/index";
import { changePassword } from "@variables/settings/breadcrumbs";

const initialValues: Partial<IChangePasswordPayload> = {
  password: "",
  password_confirmation: "",
};

export default function ChangePassword() {
  const { user } = useSelector((state: RootState) => state.authState);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values: Partial<IChangePasswordPayload>) => {
    if (!user) return;
    setLoading(true);
    authService
      .changePassword({
        ...values,
        company_id: user.company_id,
        email: user.email,
      } as IChangePasswordPayload)
      .then(() => notiUtil.notifySuccess("Password changed successfully!"))
      .finally(() => setLoading(false));
  };

  return (
    <S.ChangePassword>
      <Breadcrumb items={changePassword} />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <S.FormContainer>
            <Typo variant="h5">Change Password</Typo>
            <S.Divider />
            <S.FormGroup>
              <Col span={8}>
                <Typo variant="body1">New Password</Typo>
                <Input name="password" type="password" />
              </Col>
            </S.FormGroup>
            <S.FormGroup>
              <Col span={8}>
                <Typo variant="body1">Confirm New Password</Typo>
                <Input name="password_confirmation" type="password" />
              </Col>
            </S.FormGroup>
            <S.FormGroup>
              <Col span={8}>
                <S.SubmitBtn type="submit" size="large" disabled={loading}>
                  Save
                </S.SubmitBtn>
              </Col>
            </S.FormGroup>
          </S.FormContainer>
        </Form>
      </Formik>
    </S.ChangePassword>
  );
}
