import * as S from "./HorizontalMenu.styled";
import Item from "./Item/Item";

export interface IMenuItem {
  label: string;
  key: string;
}

interface IHorizontalMenuProps {
  items: IMenuItem[];
  onChange: (key: string) => void;
  currentKey: string;
  errors?: { [key: string]: boolean };
}

export default function HorizontalMenu({
  items,
  onChange,
  currentKey,
  errors,
}: IHorizontalMenuProps) {
  return (
    <S.HorizontalMenu>
      {items.map((item) => (
        <Item
          key={item.key}
          label={item.label}
          isActive={item.key === currentKey}
          isError={errors && errors[item.key]}
          onClick={() => onChange(item.key)}
        />
      ))}
    </S.HorizontalMenu>
  );
}
