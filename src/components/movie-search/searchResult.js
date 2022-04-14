import React from "react";
import "../home-screen/actionStyle.css";

const SearchResult = ({ m }) => {
  // const [movies, setMovies] = useState([]);
  // const [loaded, setLoaded] = useState(true);
  // const ActionUrl =
  //   "https://api.themoviedb.org/3/discover/movie?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1&with_genres=35";

  // const getAction = async () => {
  //   const response = await axios.get(`${ActionUrl}`);
  //   setMovies(response.data.results.slice(0,5));
  //   setLoaded(true);
  // };

  // useEffect(() => {
  //   if (loaded) {
  //     getAction();
  //   }
  // });
  const getImage = (path) => `https://image.tmdb.org/t/p/original${path}`;

  return (
    <li className={`wd-actionList`}>
      <div className={`featured-content`}>
        <a href="#">
          <img
            className={`featured-title imageSize`}
            //src="https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            src={getImage(m.poster_path)}
            alt="listMovies"
          />
        </a>
        <p className={`featured-desc wd-text-size`}>{m.title}</p>
      </div>
    </li>
  );
};

export default SearchResult;
