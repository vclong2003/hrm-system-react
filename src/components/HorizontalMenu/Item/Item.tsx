import * as S from "./Item.styled";

export interface IItemProps {
  isActive?: boolean;
  onClick?: () => void;
  label: string;
}

export default function Item({ label, isActive, onClick }: IItemProps) {
  return (
    <S.Item $isActive={isActive} onClick={onClick}>
      {label}
    </S.Item>
  );
}
