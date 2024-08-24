const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.number };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.number };
    default:
      return { ...state };
  }
}
export default reducer;
