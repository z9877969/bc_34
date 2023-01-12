import { refreshToken } from "../auth/authOperations";

// status 400 | 401 -> dispatch(refreshToken()) -> dispatch(getCurUser())
export const errorHandler =
  ({ error, cb }) =>
  (dispatch, getState) => {
    console.dir(error.response.status);
    // status 400 | 401
    const status = error?.response.status;
    if (status === 400 || status === 401) {
      dispatch(refreshToken(cb));
    }
  };
