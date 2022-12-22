import { useContext } from "react";
import { TodoContext } from "../../TodoPage/TodoPage";

const PriorityFilter = () => {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <select
      style={{ display: "block", margin: "10px auto", padding: "10px" }}
      name="priority"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default PriorityFilter;
