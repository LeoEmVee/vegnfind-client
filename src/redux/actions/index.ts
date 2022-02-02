import actionTypes from './actionTypes';
import { Dispatch } from 'redux';

export interface IAction<T> {
  type: string;
  payload: T;
}

export const onClickEating = (isActivated: string) => (dispatch: Dispatch<IAction<string>>) => {
  dispatch({ type: actionTypes.EATING, payload: isActivated });
}