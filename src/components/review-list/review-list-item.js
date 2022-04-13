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
                        <img src="../../../public/images/user.jpeg" width="50"/>
                        <h4>{review.user_id} (name)</h4>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <span className="float-right">{review.time}</span>
                    </div>

                    <p>{review.content}</p>

                    <div className="row">
                        <span><i className="fa-solid fa-thumbs-up"/>{review.likes} likes</span>
                        <span><i className="fa-solid fa-thumbs-down"/>{review.dislikes} dislikes</span>
                    </div>

                </div>
            </li>
        </>
    )
}
export default ReviewListItem;