import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { getImage } from "../../util/constant";
import "../movie_page_home/home_screen/actionStyle.css";
import {getUserState} from "../../actions";

const SearchResult = ({ m }) => {
    useEffect(() => {
        if (user&& user._id) {
            setQuery({uid: user._id})
        } else if (query.get("uid") !== undefined) {
            getUserState(query.get("uid"),  dispatch )
        }

    }, [dispatch])
  //const getImage = (path) => `https://image.tmdb.org/t/p/original${path}`;
    let search=`?movie=${m.id}`
    let _user = (user ? user._id : query.get('uid'))
    if(_user){
        search+= `&uid=${_user}`
    }
  return (
    <li className={`wd-actionList`}>
      <div className={`featured-content`}>
        <Link to={{pathname:"/home/moviedetail",search }}>
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
