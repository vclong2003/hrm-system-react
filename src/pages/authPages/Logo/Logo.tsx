import * as S from "./Logo.styled";

import LogoImage from "@assets/images/logo.png";

export default function Logo() {
  return (
    <S.Logo>
      <S.LogoImage src={LogoImage} />
      <S.LogoText>HR Management System</S.LogoText>
    </S.Logo>
  );
}
