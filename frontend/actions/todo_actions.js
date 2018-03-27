import * as APIUtil from "../util/todo_api_util";

export const receiveTodos = (todos = []) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchTodos = () => {
  return function(dispatch) {
    APIUtil.fetchTodos().then(todos => {
      const actionObject = receiveTodos(todos);
      dispatch(actionObject);
    });
  };
};

export const createTodo = todo => {
  return function(dispatch) {
    APIUtil.createTodo(todo).then(promisedTodo => {
      const actionObject = receiveTodo(promisedTodo);
      dispatch(actionObject);
    });
  };
};

window.fetchTodos = fetchTodos;

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
