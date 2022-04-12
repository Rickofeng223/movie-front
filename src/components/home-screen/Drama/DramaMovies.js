import React from "react";
//import "./style.css";
import "../actionStyle.css";
const DramaMovies = ({
  movie = {
    imdb_id: "tt0137523",
    tmdb_id: 550,
    title: "Fight Club",
    release_date: "1999-10-15",
    overview:
      "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fight clubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    poster_path: "../../images/fight-club.jpg",
    genres: [{ id: 18, name: "Drama" }],
    vote_average: 8.4,
  },
}) => {
  return (
    <li className={`wd-actionList`}>
      <div className={`featured-content`}>
        <a href="#">
          <img
            className={`featured-title imageSize`}
            src="https://amc-theatres-res.cloudinary.com/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg"
            alt=""
          />
        </a>
        <p className={`featured-desc`}>{movie.title}</p>
      </div>
    </li>
  );
};

export default DramaMovies;
