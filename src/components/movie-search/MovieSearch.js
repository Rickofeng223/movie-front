import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchResult from "./searchResult";

//   https://api.themoviedb.org/3/search/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&query=spiderman
const MovieSearchList = ({ searchQuery }) => {
  const [moviesList, setMoviesList] = useState([]);
  //const [loaded, setLoaded] = useState(false);
  //const searchRef = useRef();
  const searchUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&";

  const searchByTitle = async () => {
    const response = await axios.get(`${searchUrl}query=${searchQuery}`);
    setMoviesList(response.data.results);
    // setLoaded(true);
  };

  useEffect(() => {
    searchByTitle();
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Result</h1>
      <ul>
        {moviesList.map((event, key) => {
          return <SearchResult m={event} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default MovieSearchList;
