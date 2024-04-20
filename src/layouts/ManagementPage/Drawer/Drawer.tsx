import DrawerItem from "../DrawerItem/DrawerItem";
import * as S from "./Drawer.styled";

export default function Drawer() {
  return (
    <S.Drawer>
      <S.Title variant="h4">General</S.Title>
      <DrawerItem />
    </S.Drawer>
  );
}
