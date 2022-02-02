import { Dispatch } from 'redux';
import IAction from './type';

export const toggleLoginForm = () => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'TOGGLE_LOGIN_FORM' });
};
