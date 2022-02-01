import actionTypes from './actionTypes';
import { Dispatch } from 'redux';

export interface IAction<T> {
  type: string;
  payload: T;
}

export const actionTemplate = (something: string) => (dispatch: Dispatch<IAction<string>>) => {
  dispatch({ type: actionTypes.SOMETHING, payload: something });
}