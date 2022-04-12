import React from "react";
import po from "../../data/movies.json";
import "../actionStyle.css";
import ComedyMovies from "./ComedyMovies";

const Comedy = () => {
  return (
    <ul className={`menu`}>
      {po.map((event, key) => {
        return <ComedyMovies movie={event} key={key} />;
      })}
    </ul>
  );
};
export default Comedy;
