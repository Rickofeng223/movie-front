import {Link, useSearchParams} from "react-router-dom";
import { getImage } from "../../../util/constant";
import "../actionStyle.css";
import AsyncImage from "../../util/AsyncImage";
import {useSelector} from "react-redux";

const MovieCard = ({ m, handleClick }) => {
  return (
    <li
      className={`wd-actionList`}
      onClick={() => handleClick(m)}
    >
      <div className={`featured-content`}>
        <Link to="/home/moviedetail">
          <AsyncImage
            className={`featured-title imageSize`}
            src={getImage(m.poster_path)}
            alt="listMovies"
          />
        </Link>
        <p className={`featured-desc wd-movie-text wd-text-style  `}>{m.title}</p>
      </div>
    </li>
  );
};

export default MovieCard;
