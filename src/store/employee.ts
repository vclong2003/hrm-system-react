import { IEmployeeState, IGetEmployeeListPayload } from "@interfaces/employee";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import employeeService from "@services/employee";

const name = "employeeState";
const initialState: IEmployeeState = {
  employees: [],
  last_page: 0,
};

// Get employee list ---------------------------------------------
export const getEmployeeList = createAsyncThunk(
  `${name}/getEmployee`,
  async (payload: IGetEmployeeListPayload) => {
    return await employeeService.getEmployeeList(payload);
  }
);

const employeeState = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get employee list ---------------------------------------------
    builder.addCase(getEmployeeList.fulfilled, (state, action) => {
      state.employees = action.payload.data;
      state.last_page = action.payload.last_page;
    });
  },
});

export default employeeState;
