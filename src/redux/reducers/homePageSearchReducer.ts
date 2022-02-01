import { IAction } from "../actions";
import actionTypes from "../actions/actionTypes";

type HomePageSearchType = {
  eating: string;
  shopping: boolean;
  location: number[] | null;
  searchBar: string | null;
}

const initState: HomePageSearchType = {
  eating: 'blablabal',
  shopping: false,
  location: null,
  searchBar: null
}

const homePageSearchReducer = (state = initState, action: IAction<string>) => {
  switch (action.type) {
    case actionTypes.EATING:
      return {
        ...state,
        eating: action.payload
      }
    default:
      return initState;
  }
};

export default homePageSearchReducer;