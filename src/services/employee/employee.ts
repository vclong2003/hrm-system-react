import {
  ICreateEmployeePayload,
  IDeleteMultipleEmployeesPayload,
  IEmployee,
  IGetEmployeeByIdPayload,
  IGetEmployeesPayload,
  IGetEmplyeesResponse,
  IUpdateEmployeePayload,
} from "@interfaces/employee";
import { axiosInstance } from "@libs/axios";
import { buildQueryString } from "@utils/api";

// Get Employees ------------------------------------------------
const getEmployee = async (
  payload: IGetEmployeesPayload
): Promise<IGetEmplyeesResponse> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.get(`/employee?${query}`);
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
): Promise<IEmployee> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.put(`/employee/${payload.id}${query}`);
};

// Delete Multiple Employee -------------------------------------
const deleteMultipleEmployees = async (
  payload: IDeleteMultipleEmployeesPayload
): Promise<void> => {
  const query = buildQueryString({ ...payload });
  return await axiosInstance.delete(`/employee${query}`);
};

export default {
  getEmployee,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteMultipleEmployees,
};
