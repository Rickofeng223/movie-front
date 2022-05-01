import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview, getReviews} from "../../actions/admin/reviewsActions";
import axios from "axios";
import {likeOrDislike} from "../../actions/ratingactions";
import {useSearchParams} from "react-router-dom";
import {getUserState} from "../../actions/userActions";
import {getRatings} from "../../actions/admin/ratingsActions";


const ReviewListItem = ({uid,review,onDelete,
                        updateCallback}) => {
     const rating = useSelector(state => state.ratings);
    const dispatch = useDispatch()
    const user = useSelector(s=>s.currentUser);
    const reviews = useSelector(s=>s.reviews);
    const [sortType, setSort] = useState('recent');
    const [resort,setReSort] = useState(true)
    const [query,setQuery] = useSearchParams( )


    useEffect(() => {
        let iife = async ()=> {
            await getRatings(user._id, dispatch)
            await getReviews(user._id, null, dispatch,sortType)
        }
        if(resort) {
            iife();
            setReSort(false)
        }
    }, [sortType,resort,user._id,dispatch]);

    const [canDelete , setCanDelete ]= useState(false)
useEffect( ()=>{
    const userid=uid || query.get("uid")
   ; (async ()=>{

        if (userid) {
            const user =await getUserState(userid  ,dispatch)
            setCanDelete(user.role==="ADMIN" && true)
        }
    })()
},[dispatch])
    return (
        <>
            <li className="card p-4 mb-2">
                <div className="col">
                    <div className="row">
                        <div className="col mb-3">
                            <h6>{review.critic}</h6>
                            <small className="">{review.time}</small>
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
                              onClick={()=>likeOrDislike(uid,review,rating,true,dispatch,updateCallback)}>
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
                              onClick={()=>likeOrDislike(uid,review,rating,false,dispatch,updateCallback)}>
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