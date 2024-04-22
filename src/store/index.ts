import { configureStore } from "@reduxjs/toolkit";
import authState from "./auth";
import employeeState from "./employee";

const store = configureStore({
  reducer: {
    [authState.name]: authState.reducer,
    [employeeState.name]: employeeState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
