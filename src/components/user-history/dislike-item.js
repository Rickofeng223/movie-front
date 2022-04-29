import React from "react";

const DislikeItem = ({reviewRating}) => {

    return (
        <li className="card p-4 mb-2">
            <span><i className="fa-solid fa-thumbs-down"/> Disliked review on {reviewRating.movie} written by {reviewRating.critic}</span>
        </li>
    )
};

export default DislikeItem;