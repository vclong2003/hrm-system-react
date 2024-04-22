import { configureStore } from "@reduxjs/toolkit";
import authState from "./auth";

const store = configureStore({
  reducer: {
    [authState.name]: authState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
