import { Formik } from "formik";
import * as S from "./ChangePassword.styled";

export default function ChangePassword() {
  <S.ChangePassword>
    <S.Title variant="h1">Sign In</S.Title>
    <Formik>
      <S.Form>
        <S.InnerTitle variant="h2">Change Password</S.InnerTitle>
        <S.FormLabel variant="body1">Old Password</S.FormLabel>
        <S.FormInput name="oldPassword" type="password" />
        <S.FormLabel variant="body1">New Password</S.FormLabel>
        <S.FormInput name="newPassword" type="password" />
        <S.FormLabel variant="body1">Confirm New Password</S.FormLabel>
        <S.FormInput name="confirmNewPassword" type="password" />
        <S.ConfirmBtn type="submit">Confirm</S.ConfirmBtn>
      </S.Form>
    </Formik>
  </S.ChangePassword>;
}
