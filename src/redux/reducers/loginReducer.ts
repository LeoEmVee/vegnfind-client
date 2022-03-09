import IAction from '../actions/type';
import User from '../../interfaces/user'

type LoginFormState = {
  isRegister: boolean;
  authorized: boolean;
  loading: boolean;
  logUser: User | null;
};

const initState: LoginFormState = {
  isRegister: false,
  authorized: false,
  loading: false,
  logUser: null,
};

const loginReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        isRegister: action.payload,
      };
    case 'SET_AUTH':
      return {
        ...state,
        authorized: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'USER_LOG':
      return {
        ...state,
        logUser: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
