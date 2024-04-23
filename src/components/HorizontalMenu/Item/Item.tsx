import * as S from "./Item.styled";

export interface IItemProps {
  isActive?: boolean;
  isError?: boolean;
  onClick?: () => void;
  label: string;
}

export default function Item({
  label,
  isActive,
  isError,
  onClick,
}: IItemProps) {
  return (
    <S.Item
      type="button"
      $isActive={isActive}
      $isError={isError}
      onClick={onClick}>
      {label}
    </S.Item>
  );
}
