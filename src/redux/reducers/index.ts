import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import loginReducer from './loginReducer';

const reducers = combineReducers({
  searchReducer: searchReducer,
  loginReducer: loginReducer,
  // someName: someNameReducer,
});

export default reducers;
