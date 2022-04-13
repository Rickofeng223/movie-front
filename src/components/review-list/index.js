import React from "react";
import reviews from "./reviews.json"
import ReviewListItem from "./review-list-item";

const ReviewList = () => {
    return(
        <>
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