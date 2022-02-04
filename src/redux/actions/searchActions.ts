import { Dispatch } from 'redux';
import IAction from './type';

export const onClickEating = () => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'TOGGLE_EATING' });
};

export const onClickShopping = () => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'TOGGLE_SHOPPING' });
};

export const setSearchTerm =
  (value: string) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_SEARCH', payload: value });
  };

export const onChangeLocation =
  (value: number[]) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'CHANGE_LOCATION', payload: value });
  };

export const setSearchResults =
  (value: any[]) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_RESULTS', payload: value });
  };
