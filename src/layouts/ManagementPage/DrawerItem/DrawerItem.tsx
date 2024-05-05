import * as S from "./DrawerItem.styled";

interface IDrawerItemProps {
  to: string;
  label: string;
  icon: string;
}
export default function DrawerItem({ to, label, icon }: IDrawerItemProps) {
  return (
    <S.DrawerItem to={to}>
      <S.Icon>
        <S.IconImage src={icon} alt="icon" />
      </S.Icon>
      <S.Text variant="body1">{label}</S.Text>
    </S.DrawerItem>
  );
}
