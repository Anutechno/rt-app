const hideSearchBarReducer = (state = false, action) => {
  switch (action.type) {
    case "SETHIDESEARCHBAR":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default hideSearchBarReducer;
