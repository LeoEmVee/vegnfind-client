import { Dispatch } from 'redux';
import IAction from './type';

export const toggleAuthorized = () => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'TOGGLE_AUTH' });
};

export const toggleLoading = () => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'TOGGLE_LOADING' });
};

export const loggedUser = (user: any) => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'USER_LOG', payload: user });
};
