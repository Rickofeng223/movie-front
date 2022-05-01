import {Link, useSearchParams} from "react-router-dom";
import { getImage } from "../../../util/constant";
import "../actionStyle.css";
import AsyncImage from "../../util/AsyncImage";
import {useDispatch, useSelector} from "react-redux";
import {SET_USER_SELECTED_MOVIE} from "../../actions/searcActions";

const MovieCard = ({ m, handleClick }) => {
  const dispatch = useDispatch()
  return (
    <li
      className={`wd-actionList`}
      onClick={() => dispatch({
        type: SET_USER_SELECTED_MOVIE,
        payload: m,
      })}
    >
      <div className={`featured-content`}>
        <Link to={{pathname: "/home/moviedetail", search: `?movie=${m.id}`}}>
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
