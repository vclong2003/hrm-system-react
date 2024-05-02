import {
  ICreateEmployeePayload,
  IDeleteMultipleEmployeesPayload,
  IEmployee,
  IGetEmployeeByIdPayload,
  IGetEmployeeListPayload,
  IGetEmployeeListResponse,
  IUpdateEmployeePayload,
} from "@interfaces/employee";
import { axiosInstance } from "@libs/axios";
import { buildQueryString } from "@utils/api";

// Get Employees ------------------------------------------------
const getEmployeeList = async (
  payload: IGetEmployeeListPayload
): Promise<IGetEmployeeListResponse> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.get(`/employee${query}`);
};

// Get Employee By Id -------------------------------------------
const getEmployeeById = async (
  payload: IGetEmployeeByIdPayload
): Promise<IEmployee> => {
  return await axiosInstance.get(`/employee/${payload.id}`);
};

// Create Employee ----------------------------------------------
const createEmployee = async (
  payload: ICreateEmployeePayload
): Promise<IEmployee> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.post(`/employee${query}`);
};

// Update Employee ----------------------------------------------
const updateEmployee = async (
  payload: IUpdateEmployeePayload
): Promise<void> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.put(`/employee/${payload.id}${query}`);
};

// Delete Multiple Employee -------------------------------------
const deleteMultipleEmployees = async (
  payload: IDeleteMultipleEmployeesPayload
): Promise<void> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.delete(`/employee/multiple-delete${query}`);
};

export default {
  getEmployeeList,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteMultipleEmployees,
};
