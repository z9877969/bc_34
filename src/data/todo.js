import { nanoid } from "nanoid";

export const todo = [
  {
    id: nanoid(),
    date: "2022-05-03",
    title: "Title-1",
    descr: "Description for title - 1",
    priority: "low",
    isDone: false,
  },
  {
    id: nanoid(),
    date: "2022-05-03",
    title: "Title-2",
    descr: "Description for title - 2",
    priority: "high",
    isDone: false,
  },
  {
    id: nanoid(),
    date: "2022-05-03",
    title: "Title-3",
    descr: "Description for title - 3",
    priority: "medium",
    isDone: false,
  },
  {
    id: nanoid(),
    date: "2022-05-03",
    title: "Title-4",
    descr: "Description for title - 4",
    priority: "low",
    isDone: false,
  },
];
