import React from "react";
import ReviewList from "../review-list";

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
    return(
        <>
            <div className="row">
                <div className="col">
                    <img src={movie.poster_path} width="50"/>
                    <div className="row">
                        <button>Write Review</button>
                    </div>
                </div>

                <div className="col">
                    <h1>{movie.title}</h1>
                    <span>{movie.genres[0].name}</span> | <span>{movie.release_date}</span>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <a href={movie.homepage}>More info</a>

                    <h2>Reviews</h2>
                    <ReviewList/>
                </div>
            </div>
        </>
    )
};

export default MoviePage;