import { Dispatch } from 'redux';
import IAction from './type';

export const onClickEating =
  (payload: boolean) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_EATING', payload: payload });
  };

export const onClickShopping =
  (payload: boolean) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_SHOPPING', payload: payload });
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
