import React, { useEffect, useState } from "react";
import axios from "axios";

import "../actionStyle.css";
import Upcoming from "./UpComingMovies";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const ActionUrl =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&language=en-US&page=1";

  const returnAction = async () => {
    const response = await axios.get(ActionUrl);
    setMovies(response.data.results.slice(0, 5));
    setLoaded(true);
  };

  useEffect(() => {
    if (!loaded) {
      returnAction();
    }
  });

  return (
    <ul>
      {movies.map((event, key) => {
        return <Upcoming m={event} key={key} />;
      })}
    </ul>
  );
};
export default UpcomingMovies;
