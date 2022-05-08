import axios from "axios";

export const START_SEARCH_FOR_MOVIE = "START_SEARCH_FOR_MOVIE";
export const SEARCH_FOR_MOVIES_SUCCESS = "SEARCH_FOR_MOVIES_SUCCESS";
export const SEARCH_FOR_MOVIES_FALIURE = "SEARCH_FOR_MOVIES_FALIURE";

export const SET_USER_SELECTED_MOVIE = "SET_USER_SELECTED_MOVIE";

export const seartStartForMovies = () => {
  return {
    type: START_SEARCH_FOR_MOVIE,
  };
};

export const searchForMovies = (searchQuery) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&query=${searchQuery}`
      )
      .then((response) => {
        //console.log(response.data?.results);
        dispatch({
          type: SEARCH_FOR_MOVIES_SUCCESS,
          payload: response.data?.results,
        });
      })
      .catch(() => {
        dispatch({
          type: SEARCH_FOR_MOVIES_FALIURE,
          payload: [],
        });
      });
  };
};

export const setUserSelectedMovie = (movie) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER_SELECTED_MOVIE,
      payload: movie,
    });
  };
};
