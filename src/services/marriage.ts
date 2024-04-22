import { IGetMarriageListPayload, IMarriage } from "@interfaces/marriage";
import { axiosInstance } from "@libs/axios";
import { buildQueryString } from "@utils/api";

// Get Marriage list ---------------------------------------------
const getMarriageList = async (
  payload: IGetMarriageListPayload
): Promise<IMarriage[]> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.get(`/marriage${query}`);
};

export default { getMarriageList };
