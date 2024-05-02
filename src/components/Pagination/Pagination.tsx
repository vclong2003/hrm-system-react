import * as S from "./Pagination.styled";

import First from "@assets/icons/pagination/first.png";
import Last from "@assets/icons/pagination/last.png";
import Prev from "@assets/icons/pagination/prev.png";
import Next from "@assets/icons/pagination/next.png";

interface IPaginationProps {
  pages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

export default function Pagination({
  pages,
  currentPage,
  onChangePage,
}: IPaginationProps) {
  const generatePageNumbers = (pages: number, currentPage: number) => {
    if (pages <= 8) {
      return Array.from({ length: pages }, (_, i) => i + 1);
    } else if (currentPage < 5) {
      return [
        ...Array.from({ length: 4 }, (_, i) => i + 1),
        "...",
        ...Array.from({ length: 4 }, (_, i) => pages - 4 + i),
      ];
    } else if (currentPage > pages - 4) {
      return [
        1,
        2,
        3,
        4,
        "...",
        ...Array.from({ length: 4 }, (_, i) => pages - 4 + i),
      ];
    } else {
      return [
        1,
        2,
        3,
        4,
        "...",
        currentPage,
        "...",
        pages - 3,
        pages - 2,
        pages - 1,
        pages,
      ];
    }
  };
  const onNext = () => {
    if (currentPage < pages) {
      onChangePage(currentPage + 1);
    }
  };
  const onPrev = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  return (
    <S.Pagination>
      {/* Back ------------------------------------------- */}
      <S.ArrowButton>
        <S.ArrowButtonIcon src={First} />
      </S.ArrowButton>
      <S.ArrowButton>
        <S.ArrowButtonIcon src={Prev} onClick={onPrev} />
      </S.ArrowButton>
      {/* Numbers ---------------------------------------- */}
      {generatePageNumbers(pages, currentPage).map((item, index) => {
        if (typeof item === "number") {
          return (
            <S.NumberButton
              key={index}
              $active={item === currentPage}
              onClick={() => onChangePage(item)}>
              {item}
            </S.NumberButton>
          );
        } else {
          return (
            <S.NumberButton key={index} disabled>
              ...
            </S.NumberButton>
          );
        }
      })}
      {/* End of numbers -------------------------------- */}
      {/* Next ------------------------------------------- */}
      <S.ArrowButton>
        <S.ArrowButtonIcon src={Next} onClick={onNext} />
      </S.ArrowButton>
      <S.ArrowButton>
        <S.ArrowButtonIcon src={Last} />
      </S.ArrowButton>
    </S.Pagination>
  );
}
