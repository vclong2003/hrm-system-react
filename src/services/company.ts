import { ICompany } from "@interfaces/company";
import { axiosInstance } from "@libs/axios";

// Get Company List ---------------------------------
const getCompanyList = async (): Promise<ICompany[]> => {
  return await axiosInstance.get(`/company`);
};

export default { getCompanyList };
