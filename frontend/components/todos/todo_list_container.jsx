import { connect } from "react-redux";
import TodoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import { receiveTodo } from "../../actions/todo_actions";

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todoParams => {
    dispatch(receiveTodo(todoParams));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
