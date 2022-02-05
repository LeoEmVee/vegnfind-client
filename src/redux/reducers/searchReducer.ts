import IAction from '../actions/type';

type HomePageSearchType = {
  eating: boolean;
  shopping: boolean;
  location?: number[];
  searchTerm?: string;
  searchResults: [];
};

const initState: HomePageSearchType = {
  eating: false,
  shopping: false,
  location: undefined,
  searchTerm: undefined,
  searchResults: [],
};

const homePageSearchReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case 'SET_EATING':
      return {
        ...state,
        eating: action.payload,
      };
    case 'SET_SHOPPING':
      return {
        ...state,
        shopping: action.payload,
      };
    case 'SET_SEARCH':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'CHANGE_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    case 'SET_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default homePageSearchReducer;
