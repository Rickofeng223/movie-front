import React from "react";
import { useSelector } from "react-redux";
import MovieSearchList from "./MovieSearch";

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
