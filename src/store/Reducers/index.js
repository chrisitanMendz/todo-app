import { combineReducers } from "redux";
import todoReducer from "./todosReducer";
import filterReducers from "./filterReducers";

const reducers = combineReducers({
  todos: todoReducer,
  filter: filterReducers,
});

export default reducers;
