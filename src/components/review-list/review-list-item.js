import React from "react";

const ReviewListItem = (
    {
        review = {
            "wd_id": "nwwejf923f",
            "tmdb_id": 550,
            "user_id":"931864",
            "content":"this is my favorite movie",
            "time": "2022-03-12 11:59pm est",
            "likes":2,
            "dislikes":0
        }
    }
) => {
    return (
        <>
            <li className="card p-4 mb-2">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h6>{review.user_id}</h6>
                        </div>
                        <div className="col">
                            <span className="float-right">{review.time}</span>
                        </div>
                        <div className="col mr-1">

                        </div>
                    </div>
                </div>

                <div className="col">

                    <p>{review.content}</p>

                    <div className="row">
                        <span className="mr-3"><i className="fa-solid fa-thumbs-up"/> {review.likes} likes</span>
                        <span><i className="fa-solid fa-thumbs-down"/> {review.dislikes} dislikes</span>
                    </div>

                </div>
            </li>
        </>
    )
}
export default ReviewListItem;