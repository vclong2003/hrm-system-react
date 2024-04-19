import { IDepartment, IGetDepartmentListPayload } from "@interfaces/department";
import { axiosInstance } from "@libs/axios";
import { buildQueryString } from "@utils/api";

// Get department list --------------------------------
const getDepartmentList = async (
  payload: IGetDepartmentListPayload
): Promise<IDepartment[]> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.get(`/department${query}`);
};

export default { getDepartmentList };
