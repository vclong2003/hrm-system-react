import { Form, Formik } from "formik";
import * as S from "./LoginForm.styled";
import { Input, Label, Select } from "@components/formComponents";
import { Select as AntSelect } from "antd";
import FormGroup from "../../FormGroup/FormGroup";

export default function LoginForm() {
  return (
    <S.LoginForm>
      <Formik>
        <Form>
          <FormGroup>
            <Label>Username:</Label>
            <Input type="text" name="username" />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input type="password" name="password" />
          </FormGroup>
          <FormGroup>
            <Label>Factory:</Label>
            <Select>
              <AntSelect.Option value="1">Factory 1</AntSelect.Option>
              <AntSelect.Option value="2">Factory 2</AntSelect.Option>
            </Select>
          </FormGroup>
          <S.LoginButton type="submit">Login</S.LoginButton>
          <S.ForgotPasswordContainer>
            <S.ForgotPasswordLink to="#">
              Forgot Your Password?
            </S.ForgotPasswordLink>
          </S.ForgotPasswordContainer>
        </Form>
      </Formik>
    </S.LoginForm>
  );
}
