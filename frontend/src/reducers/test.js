const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      const newState = {
        count: state.count + 1
      };
      return newState;
    default:
      return state;
  }
}

export default reducer;