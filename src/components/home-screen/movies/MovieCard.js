import {Link, useSearchParams} from "react-router-dom";
import { getImage } from "../../../util/constant";
import "../actionStyle.css";
import AsyncImage from "../../util/AsyncImage";
import {useDispatch, useSelector} from "react-redux";
import {SET_USER_SELECTED_MOVIE} from "../../actions/searcActions";
import {useEffect} from "react";
import {getUserState} from "../../../actions/userActions";

const MovieCard = ({ m, handleClick }) => {
    const user = useSelector(e => e.currentUser)
    const [query, setQuery] = useSearchParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if (user&& user._id) {
            setQuery({uid: user._id})
        } else if (query.get("uid") !== undefined) {
            getUserState(query.get("uid"),  dispatch )
        }

    }, [dispatch])
    let search=`?movie=${m.id}`
    let _user = (user ? user._id : query.get('uid'))
    if(_user){
        search+= `&uid=${_user}`
    }
   return (
    <li
      className={`wd-actionList`}
      onClick={() => dispatch({
        type: SET_USER_SELECTED_MOVIE,
        payload: m,
      })}
    >
      <div className={`featured-content`}>
        <Link to={{pathname: "/home/moviedetail", search}
        }>
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
