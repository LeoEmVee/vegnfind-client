import { Dispatch } from 'redux';
import IAction from './type';
import Favourites from '../../interfaces/favourites'

export const setFavourites =
  (payload: Favourites | null) => (dispatch: Dispatch<IAction>) => {
    dispatch({ type: 'USER_FAVS', payload: payload });
  };
