import * as S from "./Pagination.styled";

import First from "@assets/icons/pagination/first.png";
import Last from "@assets/icons/pagination/last.png";
import Prev from "@assets/icons/pagination/prev.png";
import Next from "@assets/icons/pagination/next.png";

export default function Pagination() {
  return (
    <S.Pagination>
      {/* Back ------------------------------------------- */}
      <S.ArrowButton>
        <S.ArrowButtonIcon src={First} />
      </S.ArrowButton>
      <S.ArrowButton>
        <S.ArrowButtonIcon src={Prev} />
      </S.ArrowButton>
      {/* Numbers ---------------------------------------- */}
      <S.NumberButton>1</S.NumberButton>
      {/* End of numbers -------------------------------- */}
      {/* Next ------------------------------------------- */}
      <S.ArrowButton>
        <S.ArrowButtonIcon src={Next} />
      </S.ArrowButton>
      <S.ArrowButton>
        <S.ArrowButtonIcon src={Last} />
      </S.ArrowButton>
      <S.PageIndicator>1</S.PageIndicator>
    </S.Pagination>
  );
}
