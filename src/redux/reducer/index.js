import { combineReducers } from "redux";

import { homeReducer } from "./home";
import { usersReducer } from "./users";

export const rootReducer = combineReducers({
  home: homeReducer,
  users: usersReducer
})