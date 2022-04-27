import React, { useState } from "react";
import ReviewList from "../review-list";
import WriteReviewModal from "../write-review-modal";
import { useSelector } from "react-redux";
import { getImage } from "../../util/constant";

const MoviePage = (
  {
    // movie = {
    //   tmdb_id: 550,
    //   title: "Fight Club",
    //   homepage: "http://www.foxmovies.com/movies/fight-club",
    //   release_date: "1999-10-15",
    //   overview:
    //     "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fight clubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    //   poster_path: "/images/fight-club.jpg",
    //   genre_ids: [28, 12, 878],
    //   vote_average: 8.4,
    //   _id: "62643e1edf7769194cc3a19d",
    //   __v: 0,
    // },
  }
) => {
  const [modalShow, setModalShow] = React.useState(false);

  const movie = useSelector((state) => state.searchMovies.selectedMovie);

  return (
    <>
      {/* <div className="row">
        <span className="mb-3">
          <i className="fa-solid fa-arrow-left" /> Back
        </span>
      </div> */}
      <br>
      </br>
      <div className="row flex-row">
        <div className="col-2">
          <img src={getImage(movie.poster_path)} width="180" />
          <div className="row">
            <button
              className="btn btn-primary btn-block rounded-pill w-100 mt-2"
              onClick={() => setModalShow(true)}
            >
              Write Review
            </button>
            <WriteReviewModal
              show={modalShow}
              //reviewsState={[reviewsData, setReviewsData]}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>

        <div className="col-8 ml-3">
          <h1>{movie.title}</h1>
          <span>{movie.genre_ids}</span> | <span>{movie.release_date}</span>
          <h2 className="mb-3 mt-2">Vote Average: {movie.vote_average}</h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <a href={movie.homepage}>More info</a>
          <ReviewList />
        </div>
      </div>
    </>
  );
};

export default MoviePage;
