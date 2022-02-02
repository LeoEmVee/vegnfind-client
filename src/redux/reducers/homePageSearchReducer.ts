import IAction from "../actions/type";

type HomePageSearchType = {
  eating: boolean;
  shopping: boolean;
  location: number[] | null;
  searchBar: string | null;
}

const initState: HomePageSearchType = {
  eating: false,
  shopping: false,
  location: null,
  searchBar: null
}

const homePageSearchReducer = (state = initState, action: IAction<any>) => {
  switch (action.type) {
    case 'TOGGLE_EATING':
      return {
        ...state,
        eating: !state.eating
      }
    case 'TOGGLE_SHOPPING':
      return {
        ...state,
        shopping: !state.shopping
      }
    case 'CHANGE_SEARCH':
      return {
        ...state,
        searchBar: action.payload
      }
    case 'CHANGE_LOCATION':
      return {
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
};

export default homePageSearchReducer;