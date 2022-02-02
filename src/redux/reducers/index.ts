import { combineReducers } from 'redux';
import homePageSearchReducer from './homePageSearchReducer';
import { toggleLoginFormReducer } from './toggleLoginFormReducer';
import loginFormReducer from './loginFormReducer';

const reducers = combineReducers({
  homePageSearch: homePageSearchReducer,
  isLoginActive: toggleLoginFormReducer,
  loginForm: loginFormReducer,
  // someName: someNameReducer,
});

export default reducers;
