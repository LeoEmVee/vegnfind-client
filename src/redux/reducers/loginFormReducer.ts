import IAction from '../actions/type';

type LoginFormState = {
  authorized: boolean;
  loading: boolean;
  logUser?: any;
};

const initState: LoginFormState = {
  authorized: false,
  loading: false,
};

const loginFormReducer = (state = initState, action: IAction) => {
  switch (action.type) {
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

export default loginFormReducer;
