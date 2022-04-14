import React, { useEffect, useState } from "react";
import axios from "axios";
import ActionMovies from "./ActionMovies";
import "../actionStyle.css";

const ActMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const ActionUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&with_genres=28";

  const returnAction = async () => {
    const response = await axios.get(ActionUrl);
    setMovies(response.data.results.slice(0,5));
    setLoaded(true);
  };

  useEffect(() => {
    if (!loaded) {
      returnAction();
    }
  });

  return (
    <ul>
      {movies.map((event,key) => {
        return <ActionMovies m={event} key={key} />;
      })}
    </ul>
  );
};
export default ActMovies;
