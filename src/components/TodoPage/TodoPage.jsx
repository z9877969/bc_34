import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo } from "../../data/todo";
import Container from "../Container/Container";
import { PureComponent } from "react";

class TodoPage extends PureComponent {
  state = {
    todo: [],
    filter: "all", // low
    error: null, // error -> null
  };

  static getDerivedStateFromProps(newProps, state) {
    if (newProps.isOpen) {
      return { filter: "medium" };
    }

    return null;
  }

  handleEscape = (e) => {
    if (e.code === "Escape") {
      console.log("Escape");
    }
  };

  componentDidMount() {
    // console.log("CDM_TodoPage");
    const parsedTodo = JSON.parse(localStorage.getItem("todo")) ?? todo;
    this.setState({ todo: parsedTodo }); // render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevState);
    // console.log(this.state);
    // console.log("START_snapshot");
    if (prevState.todo !== this.state.todo) {
      return "amazing snapshot" + document.body.clientHeight;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    // this.setState({}) -> render -> componentDidUpdate -> this.setState({}) -> render -> cdu ->
    if (this.state.todo !== prevState.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }
    if (this.state.error !== prevState.error && this.state.error) {
      // error && error
      console.log("Error - ", this.state.error.message);
      this.setState({ error: null });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("ShCU");
  //   // if (
  //   //   nextProps.isOpen !== this.props.isOpen ||
  //   //   nextState.todo !== this.state.todo ||
  //   //   nextState.filter !== this.state.filter
  //   // ) {
  //   //   return true;
  //   // }
  //   // return false;
  //   // if (this.state.error !== nextState.error && nextState.error === null) {
  //   //   return false;
  //   // }
  //   // return true;
  // }

  addTodo = (item) => {
    this.setState((prev) => {
      return {
        todo: [...prev.todo, item],
      };
    });
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
    // this.clientHeight = document.body.clientHeight;
    console.log("RENDER_TodoPage");
    const { filter, count } = this.state;
    // console.log(this.props, "\n", this.state);

    const todo = this.filterTodoList();

    return (
      <Container>
        <p>{count}</p>
        <ToDoForm addTodo={this.addTodo} />
        <select
          style={{ display: "block", margin: "10px auto", padding: "10px" }}
          name="priority"
          value={filter}
          onChange={this.handleFilterChange}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
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
