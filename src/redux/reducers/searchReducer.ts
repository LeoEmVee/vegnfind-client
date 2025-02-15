import IAction from '../actions/type';

type HomePageSearchType = {
  eating: boolean;
  shopping: boolean;
  products: boolean;
  location?: number[];
  searchItem?: any;
  searchResults: any[];
};

const initState: HomePageSearchType = {
  eating: false,
  shopping: false,
  products: false,
  location: undefined,
  searchItem: null,
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
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'SET_SEARCHITEM':
      return {
        ...state,
        searchItem: action.payload,
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
