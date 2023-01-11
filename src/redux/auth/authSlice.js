import { createSlice } from "@reduxjs/toolkit";
import { getCurUser, loginUser, registerUser } from "./authOperations";

const setPending = (state) => {
  state.isLoading = true;
};

const setRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // isAuth: false,
    idToken: null,
    email: null,
    refreshToken: null,
    localId: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, setPending)
      .addCase(registerUser.rejected, setRejected)
      .addCase(loginUser.pending, setPending)
      .addCase(loginUser.rejected, setRejected)
      .addCase(getCurUser.pending, setPending)
      .addCase(getCurUser.rejected, setRejected)
      .addCase(registerUser.fulfilled, (_, { payload }) => {
        return {
          isLoading: false,
          error: null,
          isAuth: true,
          ...payload,
        };
      })
      .addCase(loginUser.fulfilled, (_, { payload }) => {
        return {
          isLoading: false,
          error: null,
          isAuth: true,
          ...payload,
        };
      })
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        return {
          isLoading: false,
          error: null,
          ...state,
          ...payload,
        };
      });
  },
});

export default authSlice.reducer;
