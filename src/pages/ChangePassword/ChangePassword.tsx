import * as S from "./ChangePassword.styled";
import { Formik } from "formik";

export default function ChangePassword() {
  return (
    <S.ChangePassword>
      <S.Title variant="h3">Sign In</S.Title>
      <Formik>
        <S.Form>
          <S.InnerTitle variant="h4">Change Password</S.InnerTitle>
          <S.Divider />
          <S.InputsContainer>
            <S.FormLabel variant="body1">Old Password</S.FormLabel>
            <S.FormInput name="oldPassword" type="password" />
            <S.FormLabel variant="body1">New Password</S.FormLabel>
            <S.FormInput name="newPassword" type="password" />
            <S.FormLabel variant="body1">Confirm New Password</S.FormLabel>
            <S.FormInput name="confirmNewPassword" type="password" />
            <S.ConfirmBtn type="submit">Confirm</S.ConfirmBtn>
          </S.InputsContainer>
        </S.Form>
      </Formik>
    </S.ChangePassword>
  );
}
