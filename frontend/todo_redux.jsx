import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodo } from "./actions/todo_actions";
import { receiveTodos } from "./actions/todo_actions";
import Root from "./components/root";
import allTodos from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root store={configureStore()} />,
    document.getElementById("root")
  );
});

window.store = configureStore();
window.allTodos = allTodos(window.store.getState());
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
