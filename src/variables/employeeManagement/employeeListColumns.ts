import { IEmployeeListItem } from "@interfaces/employee";
import { TableColumnsType } from "antd";

interface IData extends IEmployeeListItem {
  gender_name: string;
}

export const COLUMNS: TableColumnsType<IData> = [
  {
    title: "Gender",
    dataIndex: "gender_name",
  },
  {
    title: "NIK",
    dataIndex: "staff_id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Card Number",
    dataIndex: "card_number",
  },
  {
    title: "Department",
    dataIndex: "department_name",
  },
  {
    title: "Position",
    dataIndex: "position_name",
  },
  {
    title: "Grade",
    dataIndex: "grade_name",
  },
  {
    title: "Start Date",
    dataIndex: "contract_start_date",
  },
];
