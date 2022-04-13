import React from "react";
import reviews from "../data/reviews.json"
import ReviewListItem from "./review-list-item";

const ReviewList = () => {
    return(
        <>
            <row>
                <h2 className="mt-4">Reviews</h2>
                <label className="">
                    Filter
                    <select>
                        <option value="recent">Recent</option>
                        <option value="liked">Most likes</option>
                        <option value="disliked">Most dislikes</option>
                    </select>
                </label>
            </row>

            <ul>
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