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
  let dateString = String(movie.release_date)
  let yearString = dateString.substring(0, 4)
  let monthString = dateString.substring(5, 7)
  let dayString = dateString.substring(8, 10)



  return (
      <>
        <div className='container'>
          <div className="row mt-2">
            <div className="col-sm-7 col-md-4 col-lg-3 col-xl-2 card border-0 m-0 p-0">
              <img className='card-img' src={getImage(movie.poster_path)} />
              <button
                  className="btn btn-primary rounded mt-2 card-body"
                  onClick={() => setModalShow(true)}
              >
                Write Review
              </button>
              <WriteReviewModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
              />
            </div>

            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 ml-3">
              <h1 className='font-weight-bold font'>{movie.title}</h1>
              <br/>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4 className="mb-3 pt-2">Vote Average: {movie.vote_average}</h4>
              <h4 className='pt-2'>{'Release Date: ' + monthString + '/' + dayString + '/' + yearString}</h4>
            </div>
            <ReviewList />
          </div>
        </div>
      </>
  );

};

export default MoviePage;
