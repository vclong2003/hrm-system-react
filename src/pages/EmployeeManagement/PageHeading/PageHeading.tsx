import * as S from "./PageHeading.styled";

import Search from "@assets/icons/search.png";
import Button from "@components/Button/Button";
import Typo from "@components/Typo/Typo";

interface IPageHeadingProps {
  variant: "search" | "add" | "update";
  disabled?: boolean;
  loading?: boolean;
  initSearchValue?: string | undefined | null;
  onSearch?: (value: string) => void;
}
export default function PageHeading({
  variant,
  disabled,
  loading,
  initSearchValue,
  onSearch,
}: IPageHeadingProps) {
  return (
    <S.PageHeading>
      <Typo variant="h3">Employee Management</Typo>
      {variant === "search" && (
        <S.SearchInput
          allowClear
          placeholder="Search..."
          prefix={<S.SearchIcon src={Search} />}
          defaultValue={initSearchValue || ""}
          onChange={(e) => onSearch?.(e.target.value)}
        />
      )}
      {variant === "add" && (
        <Button
          size="large"
          type="submit"
          disabled={disabled}
          loading={loading}>
          Add
        </Button>
      )}
      {variant === "update" && (
        <Button
          size="large"
          type="submit"
          disabled={disabled}
          loading={loading}>
          Save Changes
        </Button>
      )}
    </S.PageHeading>
  );
}
