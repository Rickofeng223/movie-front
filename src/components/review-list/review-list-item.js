import React from "react";
import {useDispatch} from "react-redux";

const ReviewListItem = (
    {
        review = {
            "movie": "62643e1edf7769194cc3a4be",
            "critic": "62643e20df7769194cc3b159",
            "content": "Ea ratione quibusdam nisi amet qui laudantium inventore. Eum rerum qui nulla eum. Praesentium quam aut molestiae earum aut assumenda culpa tempora. Enim rerum cum magnam unde libero.",
            "rating": 64,
            "time": "2022-04-23T03:33:04.000Z",
            "visibility": "Rico_Haley37",
            "_id": "62643e20df7769194cc3b227",
            "__v": 0,

        }
    }
) => {

    const ratings =
        {"user": "62643e20df7769194cc3b19b",
        "review": "62643e20df7769194cc3b297",
        "likes": 0,
        "dislikes": 0,
        "liked": false,
        "disliked": true}

    const dispatch = useDispatch();
    const deleteReview = (review) => {
        dispatch({type: 'delete-review', review})
    }

    const likeReview = (review) => {
        dispatch({type: 'like-review', review})
    }

    const dislikeReview = (review) => {
        dispatch({type: 'dislike-review', review})
    }

    return (
        <>
            <li className="card p-4 mb-2">
                <div className="col">
                    <div className="row">
                        <div className="col mb-3">
                            <h6>{review.critic}</h6>
                            <small className="">{review.time}</small>
                        </div>

                        <div className="col">
                            <i className="float-end fa-solid fa-trash-can"
                                onClick={() => {
                                    deleteReview(review)}}/>
                        </div>
                    </div>
                </div>

                <div className="col">

                    <p>{review.content}</p>

                    <div className="row d-inline">
                        <span className="mr-3"
                            onClick={likeReview}>
                            {
                                ratings.liked &&
                                <i className="fa-solid fa-thumbs-up"
                                    style={{color: 'purple'}}/>
                            }
                            {
                                !ratings.liked &&
                                <i className="mr-2 fa-solid fa-thumbs-up"/>
                            }
                            {ratings.likes} likes
                        </span>
                        <span className="mr-3"
                              onClick={dislikeReview}>
                            {
                                ratings.disliked &&
                                <i className="fa-solid fa-thumbs-down"
                                   style={{color: 'purple'}}/>
                            }
                            {
                                !ratings.disliked &&
                                <i className="mr-2 fa-solid fa-thumbs-down"/>
                            }
                            {ratings.dislikes}  dislikes
                        </span>
                    </div>

                </div>
            </li>
        </>
    )
}
export default ReviewListItem;