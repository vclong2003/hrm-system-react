import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IDeleteMultipleEmployeesPayload,
  IEmployeeState,
  IGetEmployeeByIdPayload,
  IGetEmployeeListPayload,
  IUpdateEmployeePayload,
} from "@interfaces/employee";
import employeeService from "@services/employee";
import empDocumentService from "@services/employeeDocument";
import contractService from "@services/contract";
import { IUpdateEmployeeDocumentsPayload } from "@interfaces/employeeDocument";
import { ISaveContractPayload } from "@interfaces/contract";

const name = "employeeState";
const initialState: IEmployeeState = {
  employees: [],
  employee: null,
  per_page: 0,
  total: 0,
};

// Get employee list ---------------------------------------------
export const getEmployeeList = createAsyncThunk(
  `${name}/getEmployee`,
  async (payload: IGetEmployeeListPayload) => {
    return await employeeService.getEmployeeList(payload);
  }
);

// Get Employee By Id -------------------------------------------
export const getEmployeeById = createAsyncThunk(
  `${name}/getEmployeeById`,
  async (payload: IGetEmployeeByIdPayload) => {
    return await employeeService.getEmployeeById(payload);
  }
);

// Update Employee ----------------------------------------------
export const updateEmployee = createAsyncThunk(
  `${name}/updateEmployee`,
  async (payload: IUpdateEmployeePayload) => {
    await employeeService.updateEmployee(payload);
    return await employeeService.getEmployeeById({ id: payload.id });
  }
);

// Update Employee Documents ----------------------------------
export const updateEmployeeDocuments = createAsyncThunk(
  `${name}/updateEmployeeDocuments`,
  async (payload: IUpdateEmployeeDocumentsPayload) => {
    await empDocumentService.updateEmployeeDocuments(payload);
    return await employeeService.getEmployeeById({ id: payload.employee_id });
  }
);

// Save contract ----------------------------------------------
export const saveContract = createAsyncThunk(
  `${name}/saveContract`,
  async (payload: ISaveContractPayload) => {
    await contractService.saveContract(payload);
    return await employeeService.getEmployeeById({
      id: payload.employee_id,
    });
  }
);

// Delete Multiple Employee -------------------------------------
export const deleteMultipleEmployees = createAsyncThunk(
  `${name}/deleteMultipleEmployees`,
  async (payload: IDeleteMultipleEmployeesPayload) => {
    await employeeService.deleteMultipleEmployees(payload);
    return payload;
  }
);

const employeeState = createSlice({
  name,
  initialState,
  reducers: {
    setEmployee(state, action) {
      state.employee = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get employee list ---------------------------------------------
    builder.addCase(getEmployeeList.fulfilled, (state, action) => {
      state.employees = action.payload.data;
      state.per_page = action.payload.per_page;
      state.total = action.payload.total;
    });
    // Get Employee By Id -------------------------------------------
    builder.addCase(getEmployeeById.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
    // Update Employee ----------------------------------------------
    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
    // Update Employee Documents ----------------------------------
    builder.addCase(updateEmployeeDocuments.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
    // Save contract ----------------------------------------------
    builder.addCase(saveContract.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
    // Delete Multiple Employee -------------------------------------
    builder.addCase(deleteMultipleEmployees.fulfilled, (state, action) => {
      state.employees = state.employees.filter(
        (employee) => !action.payload.record_ids.includes(employee.id)
      );
      state.total = state.total - action.payload.record_ids.length;
    });
  },
});

export default employeeState;
export const { setEmployee } = employeeState.actions;
