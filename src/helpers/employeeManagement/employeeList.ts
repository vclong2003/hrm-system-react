import { EGender } from "@enums/employee";
import { IEmployeeListItem } from "@interfaces/employee";

const santinizeEmployeesData = (data: IEmployeeListItem[]) => {
  return data.map((item) => {
    return {
      ...item,
      gender_name: EGender[item.gender],
    };
  });
};

export default {
  santinizeEmployeesData,
};
