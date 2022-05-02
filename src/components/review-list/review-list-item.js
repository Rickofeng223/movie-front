import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "../../actions/admin/reviewsActions";
import {likeOrDislike} from "../../actions/ratingactions";
import {useSearchParams} from "react-router-dom";
import {getUserState} from "../../actions/userActions";
import {getRatings} from "../../actions/admin/ratingsActions";
import {formatDate} from "../profile/profile-card";


const ReviewListItem = ({
                            uid, review, onDelete,rating,
                            updateCallback
                        }) => {
/*
    const ratings = useSelector(state => state.ratings);
*/
    const dispatch = useDispatch()
    const user = useSelector(s => s.currentUser);
    const reviews = useSelector(s => s.reviews);
    const [sortType, setSort] = useState('recent');
    const [resort, setReSort] = useState(true)
    const [query, setQuery] = useSearchParams()
    const [liked, setLiked] = useState(review.liked)
    const [disliked, setDisliked] = useState(review.disliked)

    useEffect(() => {
        let iife = async () => {
            await getRatings(user._id, dispatch)
            await getReviews(user._id, null, dispatch, sortType)
        }
        if (resort) {
            iife();
            setReSort(false)
        }
    }, [sortType, resort, user._id, dispatch]);

    const [canDelete, setCanDelete] = useState(false)
    useEffect(() => {
        const userid = uid || query.get("uid")
        ;(async () => {

            if (userid) {
                const user = await getUserState(userid, dispatch)
                setCanDelete(user.role === "ADMIN" && true)
            }
        })()
    }, [dispatch])
    return (
        <>
            <li className="card p-4 mb-2">
                <div className="col">
                    <div className="row">
                        <div className="col mb-3">
                            <h6>{review.movie}</h6>
                            <small className="">{formatDate(review.time)}</small>
                        </div>
                        {canDelete && <div className="col">
                            <i className="float-end fa-solid fa-trash-can"
                               onClick={onDelete}/>
                        </div>}
                    </div>
                </div>

                <div className="col">

                    <p>{review.content}</p>

                    <div className="row d-inline">
                        <span className="mr-3"
                              onClick={  () => {



                                  if(liked){
                                      setLiked(false)
                                      review.likes --
                                  }else if(disliked){
                                      setLiked(true)
                                      setDisliked(false)
                                      review.dislikes--
                                      review.likes++
                                  }else{
                                      setLiked(true)
                                      review.likes++
                                  }


                                  //
                                  //
                                  // let x
                                  // let prev
                                  // if (liked) {
                                  //     prev = 'liked'
                                  //     x = prevToCurrState(prev, 'dislike', review)
                                  // } else if (disliked) {
                                  //     prev = 'disliked'
                                  //     x = prevToCurrState(prev, 'dislike', review)
                                  // } else {
                                  //     prev = 'neither'
                                  //     x = prevToCurrState(prev, 'dislike', review)
                                  // }
                                  // if (x.liked) {
                                  //     setLiked(true)
                                  //     setDisliked(false)
                                  // } else if (x.disliked) {
                                  //     setDisliked(true)
                                  //     setLiked(false)
                                  // } else {
                                  //     setLiked(false)
                                  //     setDisliked(false)
                                  //
                                  // }
                                  // const rv = updateReviewGivenChangeOfState(prev, x, review)
                                  likeOrDislike(uid,   review,false, dispatch)
                              }
                              }>

                            <i className={`fa-solid pe-2 fa-thumbs-up `}
                               style={liked? {color: 'green'} : {}}
                               />

                            {review.likes} likes
                        </span>
                        <span className="mr-3"
                              onClick={

                                  () => {
                                      if(liked){
                                          setLiked(false)
                                          setDisliked(true)
                                          review .likes--
                                          review .dislikes++
                                      }else if(disliked){
                                          setDisliked(false)
                                          review .dislikes--
                                      }else{
                                         setDisliked(true)
                                          review .dislikes++
                                      }

                                      likeOrDislike(uid, review, false, dispatch)
                                  }
                              }>

                            {
                                <i className="fa-solid fa-thumbs-down pe-2"
                                   style={disliked ? {color: 'red'} : {}}
                                />
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


function prevToCurrState(prev/*"liked" or "disliked"*/, action/*LIKE DISLIKE*/, review) {
    let liked, disliked
    liked = action === "like"
    disliked = !liked

    //given the previous state of the button (liked disliked or neither)
    // determine what happens if the action LIKE OR DISLIKE is applied to it
    switch (prev) {
        case "liked":
            //is like pushed
            //is dislike pushed
            if (action === "like") {
                disliked = liked = false
                /* Do nothing to liked button - leave active */
            } else if (action === "dislike") {
                disliked = true
                liked = false
                /* Make like button inactive */
                /* Make dislike button active */
            }
            break

        case "disliked":
            //is like pushed
            //is disliike pushed
            if (action === "like") {
                liked = true
                disliked = false
                /* Make dislike button inactive */
                /* Make like button active */
            } else if (action === "dislike") {
                liked = disliked = false
                /* Do nothing to dislike button - leave active */
            }
            break

        case "":
    }

    return {liked, disliked}
}

function CompueLikeDislike(beforeIPressedAButton, {
    liked: AfterPressingTHeLikeButton,
    disliked: dislikedLAfterPressingIDISLike
}, review) {
    //prev either "like" or 'dislike"
    let likes = review.likes
    let dislikes = review.dislikes

    switch (beforeIPressedAButton) {
        //i had pressed thumbs up
        case "like":
            if (AfterPressingTHeLikeButton) {
                likes--;
                return {...review, likes, dislikes}
            } else if (dislikedLAfterPressingIDISLike) {
                likes--;
                dislikes++;
                return {...review, likes, dislikes}
            } else {//AFTER PRESSING I NEITHER LIKE NOR DISLIKE THE REVIEW
                likes--;
                return {...review, likes, dislikes}
            }
        case "dislike":
            if (AfterPressingTHeLikeButton) {
                likes++;
                dislikes--;
                return {...review, likes, dislikes}
            } else if (dislikedLAfterPressingIDISLike) {
                dislikes--;
                return {...review, likes, dislikes}
            } else { //AFTER PRESSING I NEITHER LIKE NOR DISLIKE THE REVIEW
                dislikes--;
                return {...review, likes, dislikes}
            }
    }
    return {...review, likes, dislikes}
}
 