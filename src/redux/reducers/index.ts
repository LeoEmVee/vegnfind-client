import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import loginReducer from './loginReducer';
import userFavsReducer from './userFavsReducer'

const reducers = combineReducers({
  searchReducer: searchReducer,
  loginReducer: loginReducer,
  userFavsReducer: userFavsReducer
});

export default reducers;
