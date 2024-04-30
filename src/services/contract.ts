import { ISaveContractPayload } from "@interfaces/contract";
import { axiosInstance } from "@libs/axios";
import { objectToFormData } from "@utils/api";

// Save contract --------------------------------
const saveContract = async (payload: ISaveContractPayload): Promise<void> => {
  return await axiosInstance.post(
    "/contract/save-multiple",
    objectToFormData({ ...payload }),
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export default { saveContract };
