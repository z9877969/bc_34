import { useEffect, useState } from "react";
import Container from "../Container/Container";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoItems } from "../../data/todo";

let renderCount = 0;

// const hartCalc = () => {
//   let count = 0;
//   for (let i = 0; i <= 1e9; i += 1) {
//     count = i;
//   }
//   return count;
// };

const TodoPage = () => {
  const [filter, setFilter] = useState("all"); // not 1st render
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem("todo")) ?? todoItems
  );
  // const [test, setTest] = useState(() => hartCalc()); // undefined

  const addTodo = (item) => {
    setTodo((prevTodo) => [...prevTodo, item]);
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodo((prev) =>
      prev.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredTodo = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  const filteredTodo = getFilteredTodo();

  useEffect(() => {
    console.log("useEffect_Todo");
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]); // render-1 -> uE | render-2 -> uE | render-3 -> uE

  useEffect(() => {
    console.log("useEffect_Filter");
  }, [filter]);

  useEffect(() => {
    console.log("useEffect as cdm");
  }, []);

  console.log("RENDER_TODOPAGE ", (renderCount += 1));

  return (
    <Container>
      <h1>Hard calc value - {test}</h1>
      <ToDoForm addTodo={addTodo} />
      <select
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
        name="priority"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <ToDoList
        todo={filteredTodo}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </Container>
  );
};

export default TodoPage;
