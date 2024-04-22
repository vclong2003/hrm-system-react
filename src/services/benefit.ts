import { IBenefit, IGetBenefitListPayload } from "@interfaces/benefit";
import { axiosInstance } from "@libs/axios";
import { buildQueryString } from "@utils/api";

// Get Benefit List -----------------------------------
const getBenefitList = async (
  payload: IGetBenefitListPayload
): Promise<IBenefit[]> => {
  const { search, grade_id } = payload;
  const query = { grade_id };
  return await axiosInstance.get(
    `/benefit/${search}${buildQueryString(query)}`
  );
};

export default { getBenefitList };
