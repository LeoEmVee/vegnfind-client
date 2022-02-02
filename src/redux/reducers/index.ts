import { combineReducers } from "redux";
import homePageSearchReducer from './homePageSearchReducer'

const reducers = combineReducers({
  homePageSearch: homePageSearchReducer,
  //reducer: someReducer,
  //reducer: someReducer,
});

export default reducers;