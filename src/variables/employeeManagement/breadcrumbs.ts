import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

export const list: BreadcrumbItemType[] = [
  { title: "General" },
  {
    title: "Employee Management",
  },
];

export const add: BreadcrumbItemType[] = [
  { title: "General" },
  {
    path: "employee",
    title: "Employee Management",
  },
  { title: "Add Employee" },
];

export const update: BreadcrumbItemType[] = [
  { title: "General" },
  {
    path: "employee",
    title: "Employee Management",
  },
  {
    path: "employee/add-or-update",
    title: "Add Employee",
  },
  { title: "Update Employee" },
];
