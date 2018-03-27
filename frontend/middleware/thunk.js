const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    console.log("thunk");
    return action(dispatch);
  }
  return next(action);
};

window.thunkMiddleware = thunkMiddleware;
export default thunkMiddleware;
