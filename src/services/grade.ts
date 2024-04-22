import { IGetGradeListPayload, IGrade } from "@interfaces/grade";
import { axiosInstance } from "@libs/axios";
import { buildQueryString } from "@utils/api";

// Get grade list -------------------------------------
const getGradeList = async (
  payload: IGetGradeListPayload
): Promise<IGrade[]> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.get(`/grade${query}`);
};

export default { getGradeList };
