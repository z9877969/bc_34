import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  createContext,
} from "react";
import Container from "../Container/Container";
import PriorityFilter from "../TodoForm/PriorityFilter/PriorityFilter";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
// import { todo as todoItems, getTodo } from "../../data/todo";

export const TodoContext = createContext();

const TodoPage = () => {
  const [filter, setFilter] = useState("all");
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem("todo")) ?? []
  );
  const [toggle, setToggle] = useState(false);

  const addTodo = useCallback((item) => {
    setTodo((prevTodo) => [...prevTodo, item]);
  }, []);

  const removeTodo = useCallback(
    (id) => {
      setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
    }, // fnRef-1 | fnRef-1 | fnRef-1
    []
  );

  const updateTodoStatus = useCallback((id) => {
    setTodo((prev) =>
      prev.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  }, []);

  const filteredTodo = useMemo(() => {
    console.log("filteredTodo_useMemo");
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }, [filter, todo]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const todoItemRef = useRef(null);

  // SCROLL
  // const loadMoreTodo = () => {
  //   setTimeout(() => {
  //     setTodo((prev) => [...prev, ...getTodo()]);
  //   }, 500);
  // };

  // useEffect(() => {
  //   todoItemRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  // }, [todo]);

  return (
    <TodoContext.Provider value={{ filter, setFilter }}>
      <Container>
        <ToDoForm addTodo={addTodo} />
        <button onClick={() => setToggle((prev) => !prev)}>
          Toggle - {toggle.toString()}
        </button>
        <PriorityFilter />
        <ToDoList
          todo={filteredTodo}
          todoItemRef={todoItemRef}
          removeTodo={removeTodo}
          updateTodoStatus={updateTodoStatus}
        />
        {/* <button type="button" onClick={loadMoreTodo}>
        Load More
      </button> */}
      </Container>
    </TodoContext.Provider>
  );
};

export default TodoPage;

// const a = localStorage.getItem("todo")

// const b = a
