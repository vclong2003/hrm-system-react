import * as S from "./DrawerItem.styled";

import TestIcon from "@assets/icons/employee_manage.png";

export default function DrawerItem() {
  return (
    <S.DrawerItem>
      <S.Icon>
        <S.IconImage src={TestIcon} alt="icon" />
      </S.Icon>
      <S.Text variant="body1">Employee Management</S.Text>
    </S.DrawerItem>
  );
}
