import * as S from "./Drawer.styled";
import DrawerItem from "../DrawerItem/DrawerItem";

import EmployeeManagement from "@assets/icons/employee_management.png";

const DRAWER_ITEMS = [
  {
    to: "/employee",
    label: "Employee Management",
    icon: EmployeeManagement,
  },
];

export default function Drawer() {
  return (
    <S.Drawer>
      <S.Title variant="h4">General</S.Title>
      {DRAWER_ITEMS.map((item, index) => (
        <DrawerItem key={index} {...item} />
      ))}
    </S.Drawer>
  );
}
