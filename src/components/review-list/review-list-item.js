import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview} from "../../actions/admin/reviewsActions";


const ReviewListItem = ({
                            uid, review
                        }) => {
    const dispatch = useDispatch();


    const rating = useSelector(state => state.ratings);



    const likeRating = async (rating) => {

        dispatch({type: 'like-rating', rating});
        dispatch({type: 'like-review', review, liked: rating.liked, disliked: rating.disliked});

    }

    const dislikeRating = async (rating) => {
        dispatch({type: 'dislike-rating', rating})
        dispatch({type: 'dislike-review', review, liked: rating.liked, disliked: rating.disliked})

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
                                   deleteReview(uid, review, dispatch)
                               }}/>
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
                            {rating.likes} likes
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