import React from "react";
import reviews from "../data/reviews.json"
import ReviewListItem from "./review-list-item";

const ReviewList = () => {
    return(
        <>
            <div>
                <h2 className="mt-4">Reviews</h2>
            </div>

            <div className="row">
                <label className="float-right ml-3">
                    Filter
                    <select>
                        <option value="recent">Recent</option>
                        <option value="liked">Most likes</option>
                        <option value="disliked">Most dislikes</option>
                    </select>
                </label>
            </div>

            <ul className="">
                {
                    reviews.map(reviews => {
                        return(
                            <ReviewListItem review={reviews}/>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default ReviewList;