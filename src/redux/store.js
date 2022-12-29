import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// import { counterReducer } from "./counter/counterReducer";
// import todoReducer from "./todo/todoReducer";
import counterReducerFromSlice from "./counter/counterSlice";
import todoReducerFromSlice from "./todo/todoSlice";
// import { todo } from "../data/todo";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todo: todoReducer,
// });

// const initialState = {
//   counter: 50,
//   todo: {
//     items: todo,
//     filter: "all",
//   },
// };

const persistTodoConfig = {
  key: "todo",
  version: 1,
  storage,
  whitelist: ["items"],
};

const persistedTodoReducer = persistReducer(
  persistTodoConfig,
  todoReducerFromSlice
);

export const store = configureStore({
  reducer: {
    counter: counterReducerFromSlice, // (state, action) => state
    todo: persistedTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // preloadedState: initialState,
  devTools: process.env.NODE_ENV !== "production", // true
});

export const persistor = persistStore(store);
