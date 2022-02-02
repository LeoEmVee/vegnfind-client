import { Dispatch } from 'redux';
import IAction from './type';

export const onClickEating = () => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: 'TOGGLE_EATING' });
}

export const onClickShopping = () => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: 'TOGGLE_SHOPPING' });
}

export const onChangeSearchBar = (value: string) => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: 'CHANGE_SEARCH', payload: value });
}

export const onChangeLocation = (value: number[]) => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: 'CHANGE_LOCATION', payload: value });
}