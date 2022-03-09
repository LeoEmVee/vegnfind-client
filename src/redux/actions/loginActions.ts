import { Dispatch } from 'redux';
import IAction from './type';

// export interface User {
//   id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   profilePic: string;
//   username: string;
// }

export const setRegister =
  (payload: boolean) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_REGISTER', payload: payload });
  };

export const setAuthorized =
  (payload: boolean) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_AUTH', payload: payload });
  };

export const setLoading =
  (payload: boolean) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_LOADING', payload: payload });
  };

export const loggedUser = (user: any) => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'USER_LOG', payload: user });
};
