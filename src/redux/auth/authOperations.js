import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurUserApi,
  loginUserApi,
  registerUserApi,
} from "../../utils/firebaseApi";

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
  async (_, { getState, rejectWithValue }) => {
    const { idToken } = getState().auth;
    try {
      const payload = await getCurUserApi(idToken);
      return payload;
    } catch (error) {
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
