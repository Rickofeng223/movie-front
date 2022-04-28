import * as Actions from "../actions/searcActions";

const initialState = {
  searchResults: [],
  stateOfTheResults: "notStartd",
  selectedMovie: {},
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SEARCH_FOR_MOVIES_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        stateOfTheResults: "completed",
      };

    case Actions.START_SEARCH_FOR_MOVIE:
      return {
        ...state,
        searchResults: [],
        stateOfTheResults: "loading",
      };

    case Actions.SET_USER_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
