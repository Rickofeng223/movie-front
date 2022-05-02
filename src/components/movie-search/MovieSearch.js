import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { setUserSelectedMovie } from "../actions/searcActions";
import MovieCard from "../home-screen/movies/MovieCard";
// import SearchResult from "./searchResult";

//   https://api.themoviedb.org/3/search/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&query=spiderman

const MovieSearchList = ({ searchResult }) => {
  const dispatch = useDispatch();

  const handleUserSelectMovie = (movie) => {
    dispatch(setUserSelectedMovie(movie));
  };

  return (
    <div>
      <h1>Search Result</h1>
      <ul>
        {searchResult.map((event, key) => {
          return (
            <MovieCard
              m={event}
              key={key}
              handleClick={handleUserSelectMovie}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MovieSearchList;
