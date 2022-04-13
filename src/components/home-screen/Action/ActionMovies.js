import React from "react";
//import "./style.css";
import "../actionStyle.css";


//   http://api.themoviedb.org/3/genre/movie/list?api_key=f48cf3e24ec9e89cc63cc40d1d8975c1
const ActionMovies = ({
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
  }
}) => {
  return (
    <li className={`wd-actionList`}>
      <div className={`featured-content`}>
        <a href="#">
          <img
            className={`featured-title imageSize`}
            src="https://lumiere-a.akamaihd.net/v1/images/image_174b2bb6.jpeg"
            alt=""
          />
        </a>
        <p className={`featured-desc`}>{movie.title}</p>
      </div>
    </li>
  );
};

export default ActionMovies;

{/* <ul className={`menu`}>
  <li className={`wd-actionList`}>
    <div className={`featured-content`}>
      <img
        className={`featured-title imageSize`}
        src="https://amc-theatres-res.cloudinary.com/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg"
        alt=""
      />
      <p className={`featured-desc`}>{movie.title}</p>
    </div>
  </li>

  <li className="wd-actionList">
    <div class="featured-content">
      <img
        class="featured-title imageSize"
        src="https://amc-theatres-res.cloudinary.com/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg"
        alt=""
      />
      <p class="featured-desc">{movie.title}</p>
    </div>
  </li>
  <li className="wd-actionList">
    <div class="featured-content">
      <img
        class="featured-title imageSize"
        src="https://amc-theatres-res.cloudinary.com/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg"
        alt=""
      />
      <p class="featured-desc">{movie.title}</p>
    </div>
  </li>
  <li className="wd-actionList">
    <div class="featured-content">
      <img
        class="featured-title imageSize"
        src="https://amc-theatres-res.cloudinary.com/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg"
        alt=""
      />
      <p class="featured-desc">{movie.title}</p>
    </div>
  </li>
  <li className="wd-actionList">
    <div class="featured-content">
      <img
        class="featured-title imageSize"
        src="https://amc-theatres-res.cloudinary.com/v1644184331/amc-cdn/production/2/movies/45900/45869/PosterDynamic/134454.jpg"
        alt=""
      />
      <p class="featured-desc">{movie.title}</p>
    </div>
  </li>
</ul>; */}