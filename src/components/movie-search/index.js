import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MovieSearchList from "./MovieSearch";
import {useSearchParams} from "react-router-dom";
import {getUserState} from "../../actions/userActions";

const SearchList = () => {
  const searchMovies = useSelector((state) => state.searchMovies);
  let { searchResults, stateOfTheResults } = searchMovies;

  return (
    <div>
      {stateOfTheResults === "loading" ? (
        <p> Loading....</p>
      ) : stateOfTheResults === "completed" ? (
        <MovieSearchList searchResult={searchResults} />
      ) : stateOfTheResults === "error" ? (
        <p> Something went wrong</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchList;
