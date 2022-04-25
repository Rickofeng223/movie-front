import React from "react";
import "../actionStyle.css";

// const BASE_URL = "https://api.themoviedb.org/3";
//   const api_key = "f48cf3e24ec9e89cc63cc40d1d8975c1";
// //   http://api.themoviedb.org/3/genre/movie/list?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1
const MovieCard = ({ m }) => {
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
  const getImage = (path) => `https://image.tmdb.org/t/p/original${path}`;

  //const imLink = "https://image.tmdb.org/t/p/original/"    // get the img starter link
  return (
    <li className={`wd-actionList`}>
      <div className={`featured-content`}>
        <a href="#">
          <img
            className={`featured-title imageSize`}
            src={getImage(m.poster_path)}
            alt="listMovies"
          />
        </a>
        <p className={`featured-desc wd-text-size`}>{m.title}</p>
      </div>
    </li>
  );
};

export default MovieCard;
