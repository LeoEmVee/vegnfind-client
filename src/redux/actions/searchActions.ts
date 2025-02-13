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

export const onClickProducts =
  (payload: boolean) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_PRODUCTS', payload: payload });
  };

export const setSearchItem = (value: any) => (dispatch: Dispatch<IAction>) => {
  dispatch({ type: 'SET_SEARCHITEM', payload: value });
};

export const onChangeLocation =
  (value: number[]) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'CHANGE_LOCATION', payload: value });
  };

export const setSearchResults =
  (value: any[]) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'SET_RESULTS', payload: value });
  };
