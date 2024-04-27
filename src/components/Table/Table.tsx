import { TableProps } from "antd";
import * as S from "./Table.styled";

interface ITableProps extends TableProps {}
export default function Table({ ...props }: ITableProps) {
  return <S.Table {...props} />;
}
