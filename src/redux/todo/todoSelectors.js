import { createSelector } from "@reduxjs/toolkit";

export const getTodo = (state) => state.todo.items;
export const getTodoFilter = (state) => state.todo.filter;
export const getIsLoading = (state) => state.todo.isLoading;

export const getIsTodoEmpty = (state) => getTodo(state).length === 0;

// export const getFilteredTodo = (state) => {
//   console.log("getFilterTodo");
//   const items = getTodo(state);
//   const filter = getTodoFilter(state);
//   if (filter === "all") return items;
//   return items.filter((el) => el.priority === filter); // [] | []
// };

export const getFilteredTodo = createSelector(
  [getTodo, getTodoFilter],
  (todo, filter) => {
    console.log("getFilteredTodo_reselect");
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }
);

// {
//     // cach = {
//     // todo, filter, result
//     // }
//     // todo = getTodo
//     // filter = getFilter
//     // return result
// }
// JSON.stringify({})

