import React from "react";
import ActMovies from "./Action/index";
import NavigationSidebar from "../NavigationSideBar";
import Comedy from "./Comedy";
import Drama from "./Drama";



const HomeScreen = () => {
  return (
    <div>
      <NavigationSidebar />
      <h1>Action</h1>
      <ActMovies />
      <h1>Comedy</h1>
      <Comedy/>
      <h1>Drama</h1>
      <Drama/>
    </div>
  );
};
export default HomeScreen;
