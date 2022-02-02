import IAction from '../actions/type';

type LoginFormState = {
  isRegister: boolean;
  authorized: boolean;
  loading: boolean;
  logUser?: any;
};

const initState: LoginFormState = {
  isRegister: false,
  authorized: false,
  loading: false,
};

const loginReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case 'TOGGLE_REGISTER':
      return {
        ...state,
        isRegister: !state.isRegister,
      };
    case 'TOGGLE_AUTH':
      return {
        ...state,
        authorized: !state.authorized,
      };
    case 'TOGGLE_LOADING':
      return {
        ...state,
        loading: !state.loading,
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
