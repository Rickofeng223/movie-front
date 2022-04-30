import { Link } from "react-router-dom";
import { getImage } from "../../../util/constant";
import "../actionStyle.css";
import AsyncImage from "../../util/AsyncImage";

// import {Image} from "react-bootstrap";

// const BASE_URL = "https://api.themoviedb.org/3";
//   const api_key = "f48cf3e24ec9e89cc63cc40d1d8975c1";
// //   http://api.themoviedb.org/3/genre/movie/list?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1
const MovieCard = ({ m, handleClick }) => {
  // const [movies, setMovies] = useState([]);
  // const [loaded, setLoaded] = useState(true);
  // const ActionUrl =
  //   "https://api.themoviedb.org/3/discover/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&with_genres=28";

  // const returnAction = async () => {
  //   const response = await axios.get(ActionUrl);
  //   setMovies(response.data.results.slice(0,5));
  //   setLoaded(true);
  // };

  // useEffect(() => {
  //   if (loaded) {
  //     returnAction();
  //   }
  // });

  //const imLink = "https://image.tmdb.org/t/p/original/"    // get the img starter link
  return (
    <li className={`wd-actionList`} onClick={() => handleClick(m)}>
      <div className={``}>
        <Link to="/home/moviedetail">
          <AsyncImage
            className={`featured-title imageSize`}
            src={getImage(m.poster_path)}
            alt="listMovies"
          />
        </Link>
        <p className={`featured-desc wd-text-size`}>{m.title}</p>
      </div>
    </li>
  );
};

export default MovieCard;
