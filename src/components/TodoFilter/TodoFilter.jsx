import { useDispatch, useSelector } from "react-redux";
import { getTodoFilter } from "../../redux/todo/todoSelectors";
import { changeFilter } from "../../redux/todo/todoSlice";
import { priorityOptions } from "../TodoForm/TodoForm";

const TodoFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getTodoFilter);

  return (
    <div style={{ width: "200px", margin: "0 auto 20px" }}>
      <h3>Filter by priority:</h3>
      <select
        name="filter"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
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
