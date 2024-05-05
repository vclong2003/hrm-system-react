import { IRoute } from "@interfaces/common";

import EmployeeManagement from "@pages/EmployeeManagement/EmployeeManagement";
import General from "@pages/General/General";
import Settings from "@pages/Settings/Settings";

export const managementRoutes: IRoute[] = [
  {
    path: "/",
    component: <General />,
  },
  {
    path: "employee/*",
    component: <EmployeeManagement />,
  },
  {
    path: "settings/*",
    component: <Settings />,
  },
];
