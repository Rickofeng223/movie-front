import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

import "../actionStyle.css";
import { useDispatch } from "react-redux";
import { setUserSelectedMovie } from "../../actions/searcActions";
import {useSearchParams} from "react-router-dom";

const Movies = ({ movieType, dataUrl , uid }) => {
  const [movies, setMovies] = useState([]);
const[query,setQuery]=useSearchParams()
  const dispatch = useDispatch();

  const returnAction = async () => {
    const response = await axios.get(dataUrl);
    setMovies(response.data.results.slice(0, 5));
  };

  useEffect(() => {
    returnAction();
  }, []);

  const handleUserSelectMovie = (movie) => {
    (setUserSelectedMovie(movie));
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <h1> {movieType}</h1>
      <ul>
        {movies.map((event, key) => {
          return (
            <MovieCard
                uid={query.get("uid")}
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
export default Movies;
