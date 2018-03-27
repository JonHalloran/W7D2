import { RECEIVE_TODO } from "../actions/todo_actions";
import { RECEIVE_TODOS } from "../actions/todo_actions";

const initialState = [
  {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
];
const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO:
      return state.concat(action.todo);
    case RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default todosReducer;
