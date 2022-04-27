import React from "react";
import { Link } from "react-router-dom";
import { getImage } from "../../util/constant";
import "../home-screen/actionStyle.css";

const SearchResult = ({ m }) => {
  
  //const getImage = (path) => `https://image.tmdb.org/t/p/original${path}`;

  return (
    <li className={`wd-actionList`}>
      <div className={`featured-content`}>
        <Link to="/home/moviedetail">
          <img
            className={`featured-title imageSize`}
            //src="https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            src={getImage(m.poster_path)}
            alt="listMovies"
          />
        </Link>
        <p className={`featured-desc wd-text-size`}>{m.title}</p>
      </div>
    </li>
  );
};

export default SearchResult;
