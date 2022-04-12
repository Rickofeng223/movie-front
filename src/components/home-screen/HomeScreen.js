import React from "react";
import ActMovies from "../Action";
import MoviePage from "../movie-page";
import NavigationSidebar from "../NavigationSideBar";

const HomeScreen = () => {
  return (
    <div>
      <NavigationSidebar />
      <h1>Action</h1>
      <ActMovies />
      <h1>Comedy</h1>
      <h1>Horror</h1>
      <h1>Romance</h1>
      <MoviePage />
      
    </div>
  );
};
export default HomeScreen;
