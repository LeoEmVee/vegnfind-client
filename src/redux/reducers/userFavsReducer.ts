import IAction from '../actions/type';
import Favourites from '../../interfaces/favourites'

type LoginFormState = {
  userFavs: Favourites | null
};

const initState: LoginFormState = {
  userFavs: null
};

const loginReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case 'USER_FAVS':
      return {
        ...state,
        userFavs: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;