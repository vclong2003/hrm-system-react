import { IGetPositionListPayload, IPosition } from "@interfaces/position";
import { axiosInstance } from "@libs/axios";
import { buildQueryString } from "@utils/api";

// get position list -------------------------------------
const getPositionList = async (
  payload: IGetPositionListPayload
): Promise<IPosition[]> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.get(`/position${query}`);
};

export default { getPositionList };
