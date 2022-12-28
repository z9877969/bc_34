import { useDispatch, useSelector } from "react-redux";
import { changeTodoFilter } from "../../redux/todo/todoActions";
import { priorityOptions } from "../TodoForm/TodoForm";

const TodoFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.todo.filter);

  return (
    <div style={{ width: "200px", margin: "0 auto 20px" }}>
      <h3>Filter by priority:</h3>
      <select
        name="filter"
        value={filter}
        onChange={(e) => dispatch(changeTodoFilter(e.target.value))}
      >
        <option value="all">ALL</option>
        <option value={priorityOptions.LOW}>LOW</option>
        <option value={priorityOptions.MEDIUM}>MEDIUM</option>
        <option value={priorityOptions.HIGH}>HIGH</option>
      </select>
    </div>
  );
};

export default TodoFilter;
