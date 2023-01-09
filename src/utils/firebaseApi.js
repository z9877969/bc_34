import axios from "axios";

axios.defaults.baseURL = "https://bc-34-be4cc-default-rtdb.firebaseio.com/";

const transformToObjCollection = (data) =>
  data
    ? Object.entries(data).map(([id, data]) => {
        return { ...data, id };
      })
    : [];

export const addTodoApi = (todo) => {
  return axios.post("/todo.json", todo).then(({ data }) => {
    return { ...todo, id: data.name };
  });
};

export const getTodoApi = () => {
  return axios
    .get("/todo.json")
    .then(({ data }) => transformToObjCollection(data));
};

export const removeTodoApi = (id) => {
  return axios.delete(`/todo/${id}.json`).then(() => id);
};
