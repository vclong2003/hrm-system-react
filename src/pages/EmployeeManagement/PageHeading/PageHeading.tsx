import Typo from "@components/Typo/Typo";
import * as S from "./PageHeading.styled";

import Search from "@assets/icons/search.png";
import Button from "@components/Button/Button";

interface IPageHeadingProps {
  variant: "search" | "add" | "edit";
  disabled?: boolean;
  onCancel?: () => void;
  onSearch?: (value: string) => void;
}
export default function PageHeading({
  variant,
  onSearch,
  disabled,
}: IPageHeadingProps) {
  return (
    <S.PageHeading>
      <Typo variant="h3">Employee Management</Typo>
      {variant === "search" && (
        <S.SearchInput
          placeholder="Search..."
          prefix={<S.SearchIcon src={Search} />}
          onChange={(e) => onSearch?.(e.target.value)}
        />
      )}
      {(variant === "add" || variant === "edit") && (
        <Button size="large" type="submit" disabled={disabled}>
          Save
        </Button>
      )}
    </S.PageHeading>
  );
}
