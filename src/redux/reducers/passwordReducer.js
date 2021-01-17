export const passwordReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return action.payload;
    default:
      return state;
  }
};
