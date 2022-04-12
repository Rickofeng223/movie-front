import React from "react";
import po from "../../data/movies.json";
import ActionMovies from "./ActionMovies";
import "../actionStyle.css";

const ActMovies = () => {
  return (
    <ul className={`menu`}>
      {po.map((event, key) => {
        return <ActionMovies movie={event} key={key} />;
      })}
    </ul>
  );
};
export default ActMovies;
