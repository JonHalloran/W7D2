import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import { receiveTodo } from "../actions/todo_actions";
import { receiveTodos } from "../actions/todo_actions";
import thunkMiddleware from "../middleware/thunk";

const configureStore = () =>
  createStore(rootReducer, { todos: [] }, applyMiddleware(thunkMiddleware));

export default configureStore;
