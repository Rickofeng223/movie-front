import React from "react";

import combo from '../data/reviewRatingCombo.json';

const UserHistoryItem = (reviewRating) => {

    if (reviewRating.liked) {
        return (
                <li  className="card p-4 mb-2">
                    <span><i className="fa-solid fa-thumbs-up"/> Liked review on {reviewRating.movie} written by {reviewRating.critic}</span>
                </li>
        )
    }
        return (
                <li className="card p-4 mb-2">
                    <span><i className="fa-solid fa-thumbs-down"/> Disliked review on {reviewRating.movie} written by {reviewRating.critic}</span>
                </li>
        )
};

export default UserHistoryItem;
