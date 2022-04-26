import React from "react";
import {useDispatch, useSelector} from "react-redux";

const ReviewListItem = ({ review =
         {
            "movie": "62643e1edf7769194cc3a4be",
            "critic": "62643e20df7769194cc3b159",
            "content": "Ea ratione quibusdam nisi amet qui laudantium inventore. Eum rerum qui nulla eum. Praesentium quam aut molestiae earum aut assumenda culpa tempora. Enim rerum cum magnam unde libero.",
            "rating": 64,
             "likes": 27,
             "dislikes": 75,
            "time": "2022-04-23T03:33:04.000Z",
            "visibility": "Rico_Haley37",
            "_id": "62643e20df7769194cc3b227",
            "__v": 0
        }
    }) => {

    // const ratings =
    //     {"user": "62643e20df7769194cc3b19b",
    //     "review": "62643e20df7769194cc3b297",
    //     "likes": 0,
    //     "dislikes": 0,
    //     "liked": false,
    //     "disliked": true}

    const dispatch = useDispatch();
    const deleteReview = (review) => {
        dispatch({type: 'delete-review', review})
    }

    const likeRating = (rating) => {
        dispatch({type: 'like-rating', rating});
        dispatch({type: 'like-review', review, liked:rating.liked, disliked:rating.disliked});
    }

    const dislikeRating = (rating) => {
        dispatch({type: 'dislike-rating', rating})
        dispatch({type: 'dislike-review', review, liked:rating.liked, disliked:rating.disliked})
    }

    const rating = useSelector(state => state.ratings);

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
                            onClick={likeRating}>
                            {
                                rating.liked &&
                                <i className="fa-solid fa-thumbs-up"
                                    style={{color: 'purple'}}/>
                            }
                            {
                                !rating.liked &&
                                <i className="mr-2 fa-solid fa-thumbs-up"/>
                            }
                            {review.likes} likes
                        </span>
                        <span className="mr-3"
                              onClick={dislikeRating}>
                            {
                                rating.disliked &&
                                <i className="fa-solid fa-thumbs-down"
                                   style={{color: 'purple'}}/>
                            }
                            {
                                !rating.disliked &&
                                <i className="mr-2 fa-solid fa-thumbs-down"/>
                            }
                            {review.dislikes} dislikes
                        </span>
                    </div>

                </div>
            </li>
        </>
    )
}
export default ReviewListItem;