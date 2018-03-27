const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return state.concat(action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

const RECEIVE_ERRORS = "RECEIVE_ERRORS";
const CLEAR_ERRORS = "CLEAR_ERRORS";
