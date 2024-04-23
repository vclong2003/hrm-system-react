import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAuthState, ILoginPayload } from "@interfaces/auth";
import authService from "@services/auth";
import authUtils from "@utils/auth";

const name = "authState";
const initialState: IAuthState = {
  user: null,
};

// Login --------------------------------------------------------
export const login = createAsyncThunk(
  `${name}/login`,
  async (payload: ILoginPayload) => {
    const { token } = await authService.login(payload);
    authUtils.saveToken(token);
    return await authService.getCurrentUser();
  }
);

const authState = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login ---------------------------------------------
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default authState;
