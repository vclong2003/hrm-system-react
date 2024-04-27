import { IUpdateEmployeeDocumentsPayload } from "@interfaces/employeeDocument";
import { axiosInstance } from "@libs/axios";
import { objectToFormData } from "@utils/api";

// Update employee documents ----------------------------------
const updateEmployeeDocuments = async (
  payload: IUpdateEmployeeDocumentsPayload
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
