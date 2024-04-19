import { IUpdateEmployeePayload } from "@interfaces/employee";
import { axiosInstance } from "@libs/axios";
import { objectToFormData } from "@utils/api";

// Update employee documents ----------------------------------
const updateEmployeeDocuments = async (
  payload: IUpdateEmployeePayload
): Promise<void> => {
  return await axiosInstance.post(
    `/employee-document/upload`,
    objectToFormData({ ...payload }),
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export default { updateEmployeeDocuments };
