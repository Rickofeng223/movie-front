import React, {useState} from "react";
import ReviewList from "../review-list";
import WriteReviewModal from "../write-review-modal";
import {useSelector} from "react-redux";


const MoviePage = (
    {
        movie = {
            "imdb_id":"tt0137523",
            "tmdb_id": 550,
            "title":"Fight Club",
            "release_date":"1999-10-15",
            "overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fight clubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            "homepage":"http://www.foxmovies.com/movies/fight-club",
            "poster_path":"/images/fight-club.jpg",
            "genres":[{"id":18,"name":"Drama"}],
            "vote_average":8.4
        }
    }) => {

    //const reviews = useSelector(state => state.reviews);
    //const [reviewsData, setReviewsData] = useState(reviews);

    const[modalShow, setModalShow] = React.useState(false)

    return(
        <>
            {/* <div className="row">
                <span className="mb-3"><i className="fa-solid fa-arrow-left"/> Back</span>
            </div> */}

            <div className="row flex-row">
                <div className="col-2">
                    <img src={movie.poster_path} width="180"/>
                    <div className="row">
                        <button className="btn btn-primary btn-block rounded-pill w-100 mt-2"
                                onClick={() => setModalShow(true)}>Write Review</button>
                        <WriteReviewModal
                            show={modalShow}
                            //reviewsState={[reviewsData, setReviewsData]}
                            onHide={() => setModalShow(false)}/>
                    </div>
                </div>




                <div className="col-8 ml-3">
                    <h1>{movie.title}</h1>
                    <span>{movie.genres[0].name}</span> | <span>{movie.release_date}</span>
                    <h2 className="mb-3 mt-2">Vote Average: {movie.vote_average}</h2>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <a href={movie.homepage}>More info</a>
                    <ReviewList/>
                </div>
            </div>
        </>
    )
};

export default MoviePage;