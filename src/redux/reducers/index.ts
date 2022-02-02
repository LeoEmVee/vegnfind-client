import { combineReducers } from 'redux';
import homePageSearchReducer from './homePageSearchReducer';
import loginReducer from './loginReducer';

const reducers = combineReducers({
  homePageSearch: homePageSearchReducer,
  loginReducer: loginReducer,
  // someName: someNameReducer,
});

export default reducers;
