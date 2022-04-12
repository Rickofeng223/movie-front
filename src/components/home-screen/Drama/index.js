import React from "react";
import po from "../../data/movies.json";
import "../actionStyle.css";
import DramaMovies from "./DramaMovies";

const Drama = () => {
  return (
    <ul className={`menu`}>
      {po.map((event, key) => {
        return <DramaMovies movie={event} key={key} />;
      })}
    </ul>
  );
};
export default Drama;
