import axios from "axios";

axios.defaults.baseURL = "https://bc-34-be4cc-default-rtdb.firebaseio.com/";

const API_KEY = "AIzaSyB8SlD-pDQ4BnyBtC6Z7-a48eO4FmP0MyE";

const baseUrl = {
  DB: "https://bc-34-be4cc-default-rtdb.firebaseio.com/",
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
};

// const setToken = (token) =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

const transformToObjCollection = (data) =>
  data
    ? Object.entries(data).map(([id, data]) => {
        return { ...data, id };
      })
    : [];

export const addTodoApi = ({ todo, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .post(`/users/${localId}/todo.json`, todo, {
      params: {
        auth: idToken,
      },
      headers: {
        Authorization: "Bearer " + idToken,
      },
    })
    .then(({ data }) => {
      return { ...todo, id: data.name };
    });
};

// "https://<DATABASE_NAME>.firebaseio.com/users/localId/todo.json?auth=<ID_TOKEN>"
export const getTodoApi = ({ localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .get(`/users/${localId}/todo.json`, {
      params: {
        auth: idToken,
      },
    })
    .then(({ data }) => transformToObjCollection(data));
};

export const removeTodoApi = ({ id, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .delete(`/users/${localId}/todo/${id}.json`, {
      params: {
        auth: idToken,
      },
    })
    .then(() => id);
};

export const updateStatusApi = ({ id, isDone }) => {
  return axios
    .patch(`/todo/${id}.json`, { isDone })
    .then(({ data }) => ({ ...data, id }));
};

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
export const registerUserApi = (userForm) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signUp",
      {
        ...userForm,
        returnSecureToken: true,
      },
      {
        params: { key: API_KEY },
      }
    )
    .then(({ data: { idToken, email, refreshToken, localId } }) => {
      return {
        idToken,
        email,
        refreshToken,
        localId,
      };
    });
};

export const loginUserApi = (userForm) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signInWithPassword",
      {
        ...userForm,
        returnSecureToken: true,
      },
      {
        params: { key: API_KEY },
      }
    )
    .then(({ data: { idToken, email, refreshToken, localId } }) => {
      // setToken(idToken);
      return {
        idToken,
        email,
        refreshToken,
        localId,
      };
    });
};

// 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]'
export const getCurUserApi = (idToken) => {
  setBaseUrl(baseUrl.AUTH);
  // setToken(idToken);
  return axios
    .post(
      "/accounts:lookup",
      { idToken },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    });
};
