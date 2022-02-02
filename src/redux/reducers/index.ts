import { combineReducers } from "redux";
import homePageSearchReducer from './homePageSearchReducer'
import { toggleLoginFormReducer } from "./toggleLoginFormReducer";

const reducers = combineReducers({
  homePageSearch: homePageSearchReducer,
  isLoginActive: toggleLoginFormReducer
  // someName: someNameReducer,
});

export default reducers;