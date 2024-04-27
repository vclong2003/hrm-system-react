import { IEmployeeListItem } from "@interfaces/employee";
import { TableColumnsType } from "antd";
import { Key } from "react";

interface IData extends IEmployeeListItem {
  key: Key;
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
  { title: "salary", dataIndex: "audit_salary" },
  {
    title: "Position",
    dataIndex: "position_name",
  },
];
