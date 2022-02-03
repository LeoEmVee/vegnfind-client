import { Dispatch } from 'redux';
import IAction from './type';

export const setRegister =
  (payload: boolean) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_REGISTER', payload: payload });
  };

export const toggleAuthorized = () => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'TOGGLE_AUTH' });
};

export const setLoading =
  (payload: boolean) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_LOADING', payload: payload });
  };

export const loggedUser = (user: any) => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'USER_LOG', payload: user });
};
