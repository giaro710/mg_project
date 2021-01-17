import { combineReducers } from "redux";
import { emailReducer } from "./emailReducer";
import { passwordReducer } from "./passwordReducer";

export default combineReducers({
  email: emailReducer,
  password: passwordReducer,
});
