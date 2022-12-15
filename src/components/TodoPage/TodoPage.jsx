import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo } from "../../data/todo";
import Container from "../Container/Container";
import { Component } from "react";

class TodoPage extends Component {
  state = {
    todo: todo,
    filter: "all", // low
  };

  addTodo = (item) => {
    this.setState((prev) => ({
      todo: [...prev.todo, item],
    }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.filter((el) => el.id !== id),
    }));
  };

  updateTodoStatus = (id) => {
    console.log(id);
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : el
      ),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterTodoList = () => {
    const { filter, todo } = this.state;
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  render() {
    const { filter } = this.state;

    const todo = this.filterTodoList();

    return (
      <Container>
        <ToDoForm addTodo={this.addTodo} />
        <select
          name="priority"
          value={filter}
          onChange={this.handleFilterChange}
        >
          <option value="all">All</option>
          <option value="low">
            Low
          </option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <ToDoList
          todo={todo}
          removeTodo={this.removeTodo}
          updateTodoStatus={this.updateTodoStatus}
        />
      </Container>
    );
  }
}

export default TodoPage;
