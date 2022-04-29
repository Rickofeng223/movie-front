import React from "react";

const LikeItem = ({reviewRating}) => {

    return (
        <li  className="card p-4 mb-2">
            <span><i className="fa-solid fa-thumbs-up"/> Liked review on {reviewRating.movie} written by {reviewRating.critic}</span>
        </li>
    )
};

export default LikeItem;