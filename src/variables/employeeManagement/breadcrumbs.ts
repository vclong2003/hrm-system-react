import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

export const employeeList: BreadcrumbItemType[] = [
  { title: "General" },
  {
    title: "Employee Management",
  },
];

export const addEmployee: BreadcrumbItemType[] = [
  { title: "General" },
  {
    path: "employee",
    title: "Employee Management",
  },
  { title: "Add Employee" },
];
