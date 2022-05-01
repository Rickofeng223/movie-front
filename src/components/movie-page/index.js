import React, {useEffect, useState} from "react";
import ReviewList from "../review-list";
import WriteReviewModal from "../write-review-modal";
import {useDispatch, useSelector} from "react-redux";
import { getImage } from "../../util/constant";
import AsyncImage from "../util/AsyncImage";
import {useSearchParams} from "react-router-dom";
import {getUserState} from "../../actions/userActions";

const MoviePage = (
  {
  }
) => {
  const [modalShow, setModalShow] = React.useState(false);
const searchMovies= useSelector((state) => state.searchMovies)
  const movie = searchMovies.selectedMovie ;
  let dateString = String(movie.release_date)
  let yearString = dateString.substring(0, 4)
  let monthString = dateString.substring(5, 7)
  let dayString = dateString.substring(8, 10)





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
