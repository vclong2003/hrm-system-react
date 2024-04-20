import * as S from "./DrawerItem.styled";

import TestIcon from "@assets/icons/employee_management.png";

export default function DrawerItem() {
  return (
    <S.DrawerItem $isActive>
      <S.Icon>
        <S.IconImage src={TestIcon} alt="icon" />
      </S.Icon>
      <S.Text variant="body1">Employee Management</S.Text>
    </S.DrawerItem>
  );
}
