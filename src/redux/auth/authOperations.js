import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurUserApi,
  loginUserApi,
  refreshTokenApi,
  registerUserApi,
} from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";
import { logoOut } from "./authSlice";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (form, { rejectWithValue }) => {
    try {
      const payload = await registerUserApi(form);
      return payload;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (form, { rejectWithValue }) => {
    try {
      const payload = await loginUserApi(form);
      return payload;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  "auth/getCurUser",
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { idToken } = getState().auth;
    try {
      const payload = await getCurUserApi(idToken);
      return payload;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: getCurUser }));
      }, 0);

      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { idToken } = getState().auth;
      return Boolean(idToken);
    },
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (cb, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken } = getState().auth;
    try {
      const payload = await refreshTokenApi(refreshToken);
      setTimeout(() => {
        dispatch(cb());
      }, 0);
      return payload; // itToken refreshed
    } catch (error) {
      setTimeout(() => {
        dispatch(logoOut());
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
