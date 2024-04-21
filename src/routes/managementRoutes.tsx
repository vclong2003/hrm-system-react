import { IRoute } from "@interfaces/common";
import EmployeeManagement from "@pages/EmployeeManagement/EmployeeManagement";

export const managementRoutes: IRoute[] = [
  {
    path: "/",
    component: <EmployeeManagement />,
  },
];
