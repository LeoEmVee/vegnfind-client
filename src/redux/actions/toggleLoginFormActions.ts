import { Dispatch } from 'redux';
import IAction from './type';

export const toggleLoginForm = () => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: 'TOGGLE_LOGIN_FORM' });
}